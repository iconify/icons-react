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
		"content": `<style>.bevpulxmu {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.cnllexbmp {
  d: path("M3 5a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.fddkg0b5z {
  d: path("M19 7v10");
}

.jtvi3oeim {
  d: path("m16 10 3 -3 3 3");
}

.kvksesm4i {
  d: path("M3 15a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y5oq56bif {
  fill: currentColor;
  d: path("M3 15a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="bevpulxmu"/><path class="y5oq56bif"/><path class="cnllexbmp"/><path class="kvksesm4i"/><path class="fddkg0b5z"/><path class="jtvi3oeim"/></g>`,
		"fallback": "iconmind:autoscale-duotone-regular",
	});
}

export default Component;
