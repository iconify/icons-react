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
		"content": `<style>.ati-ilbhc {
  d: path("m13.5 6.5 4 4");
}

.j93aodlin {
  fill: currentColor;
  d: path("M3 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jzeve79sx {
  fill: currentColor;
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l2x-_sd5q {
  d: path("M3 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.l3ca9u8kt {
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.lfg3e_bog {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m13.5 6.5 4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mp4vf7bic {
  d: path("m10.5 6.5 -4 4");
}

.n88kwi36z {
  fill: currentColor;
  d: path("M10 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qp__wx2fk {
  d: path("M10 19a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.rxwr8htky {
  fill: currentColor;
  d: path("M17 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xrjh4rb5z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m10.5 6.5 -4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="jzeve79sx"/><path class="j93aodlin"/><path class="rxwr8htky"/><path class="n88kwi36z"/><path class="xrjh4rb5z"/><path class="lfg3e_bog"/><path class="ymw3aibdo"/><path class="l2x-_sd5q"/><path class="l3ca9u8kt"/><path class="qp__wx2fk"/><path class="mp4vf7bic"/><path class="ati-ilbhc"/></g>`,
		"fallback": "iconmind:graphql-duotone-regular",
	});
}

export default Component;
