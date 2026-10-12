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
		"content": `<style>.j-nbjixte {
  cx: 15px;
  cy: 4.25px;
  r: 1.5px;
}

.n5ikmbbez {
  d: path("M7 10V8h4v2m2 0V8h4v2");
}

.seho37gbu {
  d: path("M2.75 16.25h0v-1l.97-.22l1.31-.31l.97-.22l.66-.75l.68-.75l.66-.75h8l.66.75l.68.75l.66.75l.97.22l1.31.31l.97.22v2H2.75z");
}

.sotefpb_j {
  cx: 17px;
  cy: 19.25px;
  r: 2px;
}

.vqkzskxhk {
  cx: 9px;
  cy: 4.25px;
  r: 1.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z_9qmublw {
  cx: 7px;
  cy: 19.25px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="seho37gbu"/><circle class="z_9qmublw"/><circle class="sotefpb_j"/><circle class="vqkzskxhk"/><circle class="j-nbjixte"/><path class="n5ikmbbez"/></g>`,
		"fallback": "iconoven:carpool-sharp",
	});
}

export default Component;
