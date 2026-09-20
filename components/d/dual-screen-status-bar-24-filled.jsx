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
		"content": `<style>.ckrdsri_h {
  fill: currentColor;
  d: path("M20.245 4.004c.967 0 1.75.784 1.75 1.75V18.25a1.75 1.75 0 0 1-1.75 1.75h-7.247q-.13 0-.256-.019V4.023q.125-.018.256-.019zm-9.247-.002q.125 0 .245.017V19.98q-.12.017-.245.017H3.75A1.75 1.75 0 0 1 2 18.247V5.752c0-.967.784-1.75 1.75-1.75zM19.75 6.5h-4.502a.75.75 0 0 0-.101 1.493l.101.007h4.502a.75.75 0 0 0 .102-1.493z");
}
</style><path class="ckrdsri_h"/>`,
		"fallback": "fluent:dual-screen-status-bar-24-filled",
	});
}

export default Component;
