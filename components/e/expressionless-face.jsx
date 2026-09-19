import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f7akfhg-w {
  fill: var(--svg-color--633c17, #633c17);
  d: path("M44.909 48.47c0 1.169-1.674 2.117-3.743 2.117H22.457c-2.069 0-3.743-.948-3.743-2.117s1.674-2.12 3.743-2.12h18.709c2.069 0 3.743.95 3.743 2.12M25.541 27.29c0 1.169-1.171 2.12-2.621 2.12H9.82c-1.448 0-2.621-.951-2.621-2.12s1.173-2.118 2.621-2.118h13.1c1.45 0 2.621.949 2.621 2.118m30.237 0c0 1.169-1.171 2.12-2.621 2.12h-13.1c-1.448 0-2.621-.951-2.621-2.12s1.173-2.118 2.621-2.118h13.1c1.449 0 2.62.949 2.62 2.118");
}

.fh8ajacvs {
  cx: 31.812px;
  cy: 31.814px;
  r: 31.812px;
  fill: var(--svg-color--fbbf67, #fbbf67);
}
</style><circle class="fh8ajacvs"/><path class="f7akfhg-w"/>`,
		"fallback": "emojione-v1:expressionless-face",
	});
}

export default Component;
