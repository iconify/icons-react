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
		"content": `<style>.klp2w1ufy {
  cx: 16px;
  cy: 16px;
  r: 14px;
  fill: var(--svg-color--24983a, #24983a);
}

.wjpk5etqb {
  fill: var(--svg-color--fff, #fff);
  d: path("M22.5 10.01v13.47H9.51V10H12v11h8V10.01z");
}
</style><circle class="klp2w1ufy"/><path class="wjpk5etqb"/>`,
		"fallback": "vscode-icons:file-type-uvue",
	});
}

export default Component;
