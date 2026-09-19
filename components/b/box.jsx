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
		"content": `<style>.bw9kowqze {
  cx: 24.5px;
  cy: 24px;
  r: 5px;
}

.ll0g54h-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4");
}

.t91z9nb-k {
  d: path("m38.5 29l-8-10m8 0l-8 10m-21-5V14");
}

.ve0fuqlfe {
  cx: 14.5px;
  cy: 24px;
  r: 5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="ve0fuqlfe"/><circle class="bw9kowqze"/><path class="t91z9nb-k"/></g><path class="ll0g54h-q"/>`,
		"fallback": "arcticons:box",
	});
}

export default Component;
