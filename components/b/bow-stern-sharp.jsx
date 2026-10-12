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
		"content": `<style>.lppuxvbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 6h15M7 3.5L4.5 6L7 8.5m10-5L19.5 6L17 8.5M2.75 12h17.375l1.125 2.25l-2.6 4.35l-.49.883l-1.01.017H5.5l-1.239-.001l-.411-1.169Zm1 3.25h16.5");
}
</style><path class="lppuxvbry"/>`,
		"fallback": "iconoven:bow-stern-sharp",
	});
}

export default Component;
