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
		"content": `<style>.dkjxrwb8s {
  cx: 36.989px;
  cy: 17.492px;
  r: 0.75px;
  fill: currentColor;
}

.dto8lqbnf {
  cx: 30.495px;
  cy: 23.97px;
  r: 0.75px;
  fill: currentColor;
}

.f8esdpbuc {
  cx: 24px;
  cy: 17.492px;
  r: 0.75px;
  fill: currentColor;
}

.facg6hr-y {
  cx: 11.011px;
  cy: 23.97px;
  r: 0.75px;
  fill: currentColor;
}

.fin4upbaf {
  cx: 11.011px;
  cy: 17.492px;
  r: 0.75px;
  fill: currentColor;
}

.gexo91b7r {
  cx: 24px;
  cy: 23.97px;
  r: 0.75px;
  fill: currentColor;
}

.i9acr2sfe {
  cx: 17.505px;
  cy: 17.492px;
  r: 0.75px;
  fill: currentColor;
}

.nrwk1wb-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.673 11.026h34.654A2.17 2.17 0 0 1 43.5 13.2v21.598a2.17 2.17 0 0 1-2.173 2.175H6.673A2.17 2.17 0 0 1 4.5 34.8V13.201a2.17 2.17 0 0 1 2.173-2.175m10.521 19.399h13.612");
}

.u6lm4_ikb {
  cx: 30.495px;
  cy: 17.492px;
  r: 0.75px;
  fill: currentColor;
}

.ug0dkybnt {
  cx: 36.989px;
  cy: 23.97px;
  r: 0.75px;
  fill: currentColor;
}

.z85ba9bew {
  cx: 17.505px;
  cy: 23.97px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="nrwk1wb-g"/><circle class="fin4upbaf"/><circle class="i9acr2sfe"/><circle class="f8esdpbuc"/><circle class="u6lm4_ikb"/><circle class="dkjxrwb8s"/><circle class="facg6hr-y"/><circle class="z85ba9bew"/><circle class="gexo91b7r"/><circle class="dto8lqbnf"/><circle class="ug0dkybnt"/>`,
		"fallback": "arcticons:fossify-keyboard",
	});
}

export default Component;
