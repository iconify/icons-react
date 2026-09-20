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
		"content": `<style>.gt7coxqxq {
  d: path("M3 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.gvmht2kii {
  d: path("M3 16a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ifhv18rgk {
  d: path("M12 12h6");
}

.n-g2uz0bh {
  d: path("M2 8h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x43bekb2j {
  d: path("M9 10a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2Z");
}

.zwghjjvbs {
  d: path("M2 16h7");
}
</style><g class="nrj6p8qat"><path class="x43bekb2j"/><path class="n-g2uz0bh"/><path class="zwghjjvbs"/><path class="gt7coxqxq"/><path class="gvmht2kii"/><path class="ifhv18rgk"/></g>`,
		"fallback": "iconmind:dual-stack-outline-regular",
	});
}

export default Component;
