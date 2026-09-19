import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ayscgq6zu {
  cx: 9.13px;
  cy: 24.459px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.h9xomwwcb {
  cx: 24px;
  cy: 39.329px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jf7a7tbyo {
  cx: 24px;
  cy: 24.459px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mmvx2aclv {
  cx: 16.565px;
  cy: 17.025px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.pi7qwvbtq {
  cx: 31.435px;
  cy: 31.894px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.s1eqzzbkl {
  cx: 31.435px;
  cy: 17.025px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.vxr-sx9cm {
  cx: 16.565px;
  cy: 31.894px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x97150bfl {
  cx: 38.87px;
  cy: 24.459px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zgq-0acry {
  cx: 24px;
  cy: 9.59px;
  r: 3.631px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="jf7a7tbyo"/><circle class="pi7qwvbtq"/><circle class="mmvx2aclv"/><circle class="vxr-sx9cm"/><circle class="s1eqzzbkl"/><circle class="h9xomwwcb"/><circle class="x97150bfl"/><circle class="ayscgq6zu"/><circle class="zgq-0acry"/>`,
		"fallback": "arcticons:delta",
	});
}

export default Component;
