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
		"content": `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.bopak3bua {
  cx: 12px;
  cy: 16.75px;
  r: 1.75px;
}

.rrzohjbez {
  d: path("M12 12v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zt548wbiy {
  cx: 12px;
  cy: 8.75px;
  r: 3.25px;
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><circle class="zt548wbiy"/><path class="rrzohjbez"/><circle class="bopak3bua"/></g>`,
		"fallback": "iconoven:birth-certificate-sharp",
	});
}

export default Component;
