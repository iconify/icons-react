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
		"content": `<style>.i1wcr27il {
  d: path("M5 17a7 7 0 0 1 14 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ow28lfbqg {
  d: path("M2 17a10 10 0 0 1 20 0");
}

.tcbtlrbob {
  d: path("M8 17a4 4 0 0 1 8 0");
}
</style><g class="nrj6p8qat"><path class="tcbtlrbob"/><path class="i1wcr27il"/><path class="ow28lfbqg"/></g>`,
		"fallback": "iconmind:biometric-outline-regular",
	});
}

export default Component;
