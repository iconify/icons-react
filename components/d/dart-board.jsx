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
		"content": `<style>.doltwk4-b {
  d: path("M12.5 13.5h5.75m-9.75 0H2.75m7.75 2v5.75m0-9.75V5.75m0 7.75l8-8m-2.25-1.25v3.5h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r0n4bnoau {
  cx: 10.5px;
  cy: 13.5px;
  r: 4.75px;
}

.xh4evtb-j {
  cx: 10.5px;
  cy: 13.5px;
  r: 7.75px;
}
</style><g class="hntgybcog"><circle class="xh4evtb-j"/><circle class="r0n4bnoau"/><path class="doltwk4-b"/></g>`,
		"fallback": "iconoven:dart-board",
	});
}

export default Component;
