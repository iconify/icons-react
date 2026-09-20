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
		"content": `<style>.hhc0ntbct {
  fill: var(--svg-color--fff, #fff);
  d: path("M7.25 7.25h17.5v17.5h-3.5v-14H16v14H7.25");
}

.sjygs8clv {
  fill: var(--svg-color--c12127, #c12127);
  d: path("M2 2h28v28H2");
}
</style><path class="sjygs8clv"/><path class="hhc0ntbct"/>`,
		"fallback": "vscode-icons:file-type-npm",
	});
}

export default Component;
