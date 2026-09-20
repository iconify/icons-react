import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ceh4jubyk {
  cx: 9px;
  cy: 31px;
  r: 2px;
  fill: var(--svg-color--ccd6dd, #ccd6dd);
}

.fec_atbaj {
  cx: 27px;
  cy: 31px;
  r: 2px;
  fill: var(--svg-color--ccd6dd, #ccd6dd);
}

.fg3ogsw8u {
  fill: var(--svg-color--dd2e44, #dd2e44);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-3a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.r7cjibb2o {
  cx: 9px;
  cy: 31px;
  r: 4px;
  fill: var(--svg-color--292f33, #292f33);
}

.rh0m0lm3b {
  cx: 27px;
  cy: 31px;
  r: 4px;
  fill: var(--svg-color--292f33, #292f33);
}

.wrto74qhy {
  fill: var(--svg-color--ffcc4d, #ffcc4d);
  d: path("m19 13l-.979-1H7.146C4 12 3 14 3 14l-3 5.959V25h19z");
}

.x1z8rhb6l {
  fill: var(--svg-color--55acee, #55acee);
  d: path("M9 20H2l2-4s1-2 3-2h2z");
}

.z11yz7bml {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M32 8H17a4 4 0 0 0-4 4v13h23V12a4 4 0 0 0-4-4");
}
</style><path class="fg3ogsw8u"/><path class="wrto74qhy"/><path class="x1z8rhb6l"/><circle class="r7cjibb2o"/><circle class="ceh4jubyk"/><circle class="rh0m0lm3b"/><circle class="fec_atbaj"/><path class="z11yz7bml"/>`,
		"fallback": "twemoji:delivery-truck",
	});
}

export default Component;
