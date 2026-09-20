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
		"content": `<style>.e0fatccfd {
  d: path("M18 12h4");
}

.grgwcd1mp {
  d: path("M7.5 17a4.5 4.5 0 0 1 9 0");
}

.h4br4z40f {
  d: path("M2 12h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sdu5ckfnu {
  d: path("m5 6 3 3");
}

.sxnekjbzh {
  d: path("m19 6 -3 3");
}

.z9ittvbis {
  d: path("M2 19h20");
}
</style><g class="nrj6p8qat"><path class="grgwcd1mp"/><path class="z9ittvbis"/><path class="h4br4z40f"/><path class="e0fatccfd"/><path class="sdu5ckfnu"/><path class="sxnekjbzh"/></g>`,
		"fallback": "iconmind:golden-hour-outline-regular",
	});
}

export default Component;
