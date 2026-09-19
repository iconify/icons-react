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
		"content": `<style>.bglii4bsi {
  width: 35.557px;
  height: 28.446px;
  x: 6.221px;
  y: 14.054px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.399px;
  ry: 4.399px;
}

.f4bpwnb5g {
  cx: 35.268px;
  cy: 28.277px;
  r: 2.749px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.sanjpzblp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.221 18.453v-2.556a3.935 3.935 0 0 1 2.823-3.775l21.992-6.485A3.3 3.3 0 0 1 35.268 8.8v5.253");
}
</style><rect class="bglii4bsi"/><path class="sanjpzblp"/><circle class="f4bpwnb5g"/>`,
		"fallback": "arcticons:edenred-wallet",
	});
}

export default Component;
