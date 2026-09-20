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
		"content": `<style>.ig5fosy2a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.681 30.512A14.75 12.75 0 0 1 24 36.75a14.75 12.75 0 0 1-12.681-6.238m0-13.025A14.75 12.75 0 0 1 24 11.249a14.75 12.75 0 0 1 12.688 6.249M31.54 28v-8h2.619c1.48 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.681 2.686H31.54M39.5 24h4m-2-2v4m-31.7-.683v.033a2.65 2.65 0 1 1-5.3 0v-2.7a2.65 2.65 0 1 1 5.3 0v.033");
}

.p29mokq2p {
  width: 5.3px;
  height: 8px;
  x: 23.58px;
  y: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.65px;
  ry: 2.65px;
}

.qasjxtbjd {
  width: 5.3px;
  height: 8px;
  x: 12.46px;
  y: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.65px;
  ry: 2.65px;
}

.zvuxioijn {
  cx: 20.67px;
  cy: 24px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="ig5fosy2a"/><rect class="qasjxtbjd"/><rect class="p29mokq2p"/><circle class="zvuxioijn"/>`,
		"fallback": "arcticons:coop-plus",
	});
}

export default Component;
