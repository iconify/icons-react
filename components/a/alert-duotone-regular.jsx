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
		"content": `<style>.cvkofmywl {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M12 4v4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.d1zyr9bfc {
  d: path("M12 4v4");
}

.ezg__mbcy {
  fill: currentColor;
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.fjs2tubqx {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 15a7 7 0 0 1 14 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.if5ft31dv {
  d: path("M11 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qu79-qujw {
  d: path("M5 15a7 7 0 0 1 14 0");
}

.t4hxo2bao {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 15h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xmopbdc-t {
  d: path("M5 15h14");
}
</style><g class="nrj6p8qat"><path class="ezg__mbcy"/><path class="fjs2tubqx"/><path class="t4hxo2bao"/><path class="cvkofmywl"/><path class="qu79-qujw"/><path class="xmopbdc-t"/><path class="d1zyr9bfc"/><path class="if5ft31dv"/></g>`,
		"fallback": "iconmind:alert-duotone-regular",
	});
}

export default Component;
