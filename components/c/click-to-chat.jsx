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
		"content": `<style>.a3ws7gb5i {
  cx: 13.019px;
  cy: 18.51px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.b659jqbyh {
  cx: 24px;
  cy: 29.49px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.cr-y_f61l {
  cx: 34.981px;
  cy: 29.49px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.dgnvtwbcn {
  cx: 24px;
  cy: 40.471px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fq6556btp {
  cx: 24px;
  cy: 7.529px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.keuxvvwcy {
  cx: 34.981px;
  cy: 7.529px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ldk3mpr8i {
  cx: 13.019px;
  cy: 29.49px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mbkt_cbgt {
  cx: 24px;
  cy: 18.51px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n2vhqib7p {
  cx: 34.981px;
  cy: 18.51px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.osh7gz1ef {
  cx: 13.019px;
  cy: 7.529px;
  r: 3.029px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="dgnvtwbcn"/><circle class="ldk3mpr8i"/><circle class="b659jqbyh"/><circle class="cr-y_f61l"/><circle class="n2vhqib7p"/><circle class="mbkt_cbgt"/><circle class="a3ws7gb5i"/><circle class="keuxvvwcy"/><circle class="fq6556btp"/><circle class="osh7gz1ef"/>`,
		"fallback": "arcticons:click-to-chat",
	});
}

export default Component;
