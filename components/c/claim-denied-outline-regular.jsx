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
		"content": `<style>.ae-e09b3w {
  d: path("M3 12h18");
}

.km7jpmbti {
  d: path("m14.5 5 -5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ohhz_s35v {
  d: path("M12 12v6");
}

.t9gnp4b0n {
  d: path("M3 12a9 9 0 0 1 18 0");
}

.yb0sj-xar {
  d: path("M12 18a2 2 0 0 1 -4 0");
}

.z-r90accw {
  d: path("m9.5 5 5 5");
}
</style><g class="nrj6p8qat"><path class="t9gnp4b0n"/><path class="ae-e09b3w"/><path class="ohhz_s35v"/><path class="yb0sj-xar"/><path class="z-r90accw"/><path class="km7jpmbti"/></g>`,
		"fallback": "iconmind:claim-denied-outline-regular",
	});
}

export default Component;
