import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dqyiiib4g {
  fill: currentColor;
  d: path("M2.5 16.5v-9h12.962l-.812 1H3.5v7h11.154l-.177 1zm14.867 0l.604-3.712h-2.933L18.417 7.5h.217l-.604 3.712h2.933L17.585 16.5zM3.5 15.5v-7z");
}
</style><path class="dqyiiib4g"/>`,
		"fallback": "material-symbols-light:battery-charging-full-2-outline-sharp",
	});
}

export default Component;
