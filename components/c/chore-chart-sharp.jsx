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
		"content": `<style>.m8lencboy {
  d: path("M3 12h18M9.25 3v18.25M13.5 7.5l1.25 1.25l2.5-2.5m-2 8.57l.37.81l.12.27l.3.03l.88.11l.3.03l-.22.2l-.66.6l-.22.2l.06.3l.18.87l.06.29l-.26-.15l-.77-.43l-.26-.15l-.27.15l-.77.43l-.26.15l.06-.29l.18-.87l.06-.3l-.22-.2l-.66-.6l-.22-.2l.3-.03l.88-.11l.3-.03l.12-.27l.37-.81l.13-.27z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yt0a320fy {
  d: path("M3 3h18v18.25H3z");
}
</style><g class="x2cwu0gfd"><path class="yt0a320fy"/><path class="m8lencboy"/></g>`,
		"fallback": "iconoven:chore-chart-sharp",
	});
}

export default Component;
