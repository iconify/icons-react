import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ls-mw9bcr {
  fill: currentColor;
  d: path("M9.854 1.146a.5.5 0 1 0-.708.708L10.293 3H9.5a7.5 7.5 0 1 0 7.5 7.5a.5.5 0 0 0-1 0A6.5 6.5 0 1 1 9.5 4h.793L9.146 5.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708zm3.493 5.994a.5.5 0 0 1 .013.707l-3.85 4a.5.5 0 0 1-.72 0l-1.65-1.715a.5.5 0 0 1 .72-.693l1.29 1.34l3.49-3.626a.5.5 0 0 1 .707-.013");
}
</style><path class="ls-mw9bcr"/>`,
		"fallback": "fluent:approvals-app-20-regular",
	});
}

export default Component;
