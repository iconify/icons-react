import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lw189ji2t {
  fill: currentColor;
  d: path("M7.854.146a.5.5 0 1 0-.708.708l1.15 1.15A6.5 6.5 0 1 0 15 8.5v-.04a.47.47 0 0 0-.48-.46h-.042a.49.49 0 0 0-.478.5a5.5 5.5 0 1 1-5.711-5.496L7.146 4.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708zm4 6a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0");
}
</style><path class="lw189ji2t"/>`,
		"fallback": "fluent:approvals-app-16-regular",
	});
}

export default Component;
