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
		"content": `<style>.gdpz_rbbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.532 9.567h24.936a4 4 0 0 1 4 4V38.5a4 4 0 0 1-4 4H11.532a4 4 0 0 1-4-4V13.567a4 4 0 0 1 4-4M13.715 5.5v4.068M34.14 5.5v4.068M9.731 19.89h28.36");
}

.nlp2cibve {
  cx: 24px;
  cy: 26.011px;
  r: 0.75px;
  fill: currentColor;
}

.ocpawbc1d {
  cx: 32.196px;
  cy: 34.251px;
  r: 0.75px;
  fill: currentColor;
}

.okrn69btc {
  cx: 32.196px;
  cy: 26.011px;
  r: 0.75px;
  fill: currentColor;
}

.osn4frboc {
  cx: 15.804px;
  cy: 34.251px;
  r: 0.75px;
  fill: currentColor;
}

.v0842yb9f {
  cx: 15.804px;
  cy: 26.011px;
  r: 0.75px;
  fill: currentColor;
}

.xhwb3e44v {
  cx: 24px;
  cy: 34.251px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="gdpz_rbbn"/><circle class="v0842yb9f"/><circle class="nlp2cibve"/><circle class="okrn69btc"/><circle class="osn4frboc"/><circle class="xhwb3e44v"/><circle class="ocpawbc1d"/>`,
		"fallback": "arcticons:fossify-calendar",
	});
}

export default Component;
