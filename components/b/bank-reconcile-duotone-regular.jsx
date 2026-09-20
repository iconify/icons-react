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
		"content": `<style>.ho2fa5bbz {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 16.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.k5ecbgu2w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wtzvy2bax {
  d: path("M8 16.5h8");
}

.yqc0twwou {
  d: path("M8 13.5h8");
}

.zm_si6btb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 13.5h8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="k5ecbgu2w"/><path class="zm_si6btb"/><path class="ho2fa5bbz"/><path class="mcubrkb2y"/><path class="yqc0twwou"/><path class="wtzvy2bax"/></g>`,
		"fallback": "iconmind:bank-reconcile-duotone-regular",
	});
}

export default Component;
