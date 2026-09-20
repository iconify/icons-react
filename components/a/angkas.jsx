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
		"content": `<style>.dug84ebiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.408 28.252a4.431 4.431 0 1 0 6.824 3.73");
}

.jid6qubpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.069 31.982l-2.538-6.421m-11.889 6.235l-2.923-6.93l-15.274-3.253l6.592 8.818a3.4 3.4 0 0 0 2.726 1.365h16.704a6.81 6.81 0 0 1 6.812-6.812h3.277l-9.9-11.927l-2.947 2.027l2.405 6.2l-2.718 10.512");
}

.n95izbc0b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.719 24.866l1.179-4.353a2.136 2.136 0 0 0-2.062-2.695H6.352a1.852 1.852 0 0 0-.482 3.64l.575.155m21.868-10.027l1.396 3.498m2.947-2.027l-.83-.83a2.2 2.2 0 0 0-1.548-.64h-5.872");
}

.pz_3ocbjw {
  cx: 39.069px;
  cy: 31.982px;
  r: 4.431px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="dug84ebiu"/><circle class="pz_3ocbjw"/><path class="jid6qubpp"/><path class="n95izbc0b"/>`,
		"fallback": "arcticons:angkas",
	});
}

export default Component;
