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
		"content": `<style>.xhveym-0y {
  fill: currentColor;
  d: path("M13.272 2.004a.75.75 0 0 0-.772.75v7.996c0 .414.336.75.75.75h7.996a.75.75 0 0 0 .75-.772a9 9 0 0 0-8.724-8.724m-2.516 2.207a.75.75 0 0 1 .244.554v5.985A2.25 2.25 0 0 0 13.25 13h5.965a.75.75 0 0 1 .747.819a9.001 9.001 0 1 1-9.78-9.801a.75.75 0 0 1 .574.193");
}
</style><path class="xhveym-0y"/>`,
		"fallback": "fluent:data-pie-24-filled",
	});
}

export default Component;
