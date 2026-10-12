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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwaffoo8u {
  d: path("M8 7.5h4v6l3.5 1.25l.99.35l.01 1.05V17H8Zm5.5 7V17");
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><path class="xwaffoo8u"/></g>`,
		"fallback": "iconoven:foot-protection-sharp",
	});
}

export default Component;
