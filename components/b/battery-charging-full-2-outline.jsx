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
		"content": `<style>.ne7lx8jie {
  fill: currentColor;
  d: path("M3.308 16.5q-.348 0-.578-.23t-.23-.578V8.308q0-.348.23-.578t.578-.23h12.154l-.812 1H3.5v7h11.154l-.177 1zm14.06 0l.603-3.712h-2.933L18.417 7.5h.217l-.604 3.712h2.933L17.585 16.5zM3.5 15.5v-7z");
}
</style><path class="ne7lx8jie"/>`,
		"fallback": "material-symbols-light:battery-charging-full-2-outline",
	});
}

export default Component;
