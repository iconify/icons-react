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
		"content": `<style>.e1e067yag {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4 11h16v2H4z");
}
</style><path class="e1e067yag"/>`,
		"fallback": "ic:baseline-horizontal-rule",
	});
}

export default Component;
