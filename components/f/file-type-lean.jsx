import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qnpt-26ug {
  fill: none;
  stroke: var(--svg-color--dedede, #dedede);
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 3l13 25L29 3M10 16h12");
}
</style><path class="qnpt-26ug"/>`,
		"fallback": "vscode-icons:file-type-lean",
	});
}

export default Component;
