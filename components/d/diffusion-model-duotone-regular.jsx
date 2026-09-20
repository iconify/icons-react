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
		"content": `<style>.c4o3x9bhp {
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.chgl46v6k {
  d: path("M13.5 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.edllzuogn {
  fill: currentColor;
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i3rtqmu1v {
  d: path("M9 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.jlgxzd_ny {
  fill: currentColor;
  d: path("M8 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ks_m69w8c {
  fill: currentColor;
  d: path("M9 15.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
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

.okendibpy {
  fill: currentColor;
  d: path("M14.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qzkq_tbad {
  fill: currentColor;
  d: path("M13.5 8.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vny6l674c {
  d: path("M14.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="nrj6p8qat"><path class="edllzuogn"/><path class="jlgxzd_ny"/><path class="qzkq_tbad"/><path class="ks_m69w8c"/><path class="okendibpy"/><path class="iaozfqbuj"/><path class="c4o3x9bhp"/><path class="chgl46v6k"/><path class="i3rtqmu1v"/><path class="vny6l674c"/></g>`,
		"fallback": "iconmind:diffusion-model-duotone-regular",
	});
}

export default Component;
