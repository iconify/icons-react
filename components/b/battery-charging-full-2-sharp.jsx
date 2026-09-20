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
		"content": `<style>.fko9l_bxs {
  fill: currentColor;
  d: path("M2.5 16.5v-9h12.962l-4 5.742V15.5h3.192l-.177 1zm14.867 0l.604-3.712h-2.933L18.417 7.5h.217l-.604 3.712h2.933L17.585 16.5z");
}
</style><path class="fko9l_bxs"/>`,
		"fallback": "material-symbols-light:battery-charging-full-2-sharp",
	});
}

export default Component;
