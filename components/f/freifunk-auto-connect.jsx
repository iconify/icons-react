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
		"content": `<style>.b_bf6h1cb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.7 23.171a9.994 9.994 0 1 1 0-.043");
}

.tc66w0b-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.496 23.33a12.121 12.121 0 1 1 .004-.058m-31.648.184l2.303 2.3l-2.371 2.44m2.371-2.44l-6.036.035");
}

.tss_75bey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.024 22.065l-3.481 3.481l3.59 3.698m-3.59-3.698l9.136.054m-12.12 2.415a8.694 8.694 0 1 1 .003-.036");
}
</style><path class="tss_75bey"/><path class="b_bf6h1cb"/><path class="tc66w0b-b"/>`,
		"fallback": "arcticons:freifunk-auto-connect",
	});
}

export default Component;
