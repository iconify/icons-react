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
		"content": `<style>.op256ci9e {
  fill: currentColor;
  d: path("M3.308 16.5q-.348 0-.578-.23t-.23-.578V8.308q0-.348.23-.578t.578-.23h12.154l-4 5.742V15.5h3.192l-.177 1zm14.06 0l.603-3.712h-2.933L18.417 7.5h.217l-.604 3.712h2.933L17.585 16.5z");
}
</style><path class="op256ci9e"/>`,
		"fallback": "material-symbols-light:battery-charging-full-2",
	});
}

export default Component;
