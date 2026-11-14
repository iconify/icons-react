import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e0eurhbxr {
  d: path("M7.5 5.25h6A1.75 1.75 0 0 1 15.25 7v2.5a1.75 1.75 0 0 1-1.75 1.75h-6A1.75 1.75 0 0 1 5.75 9.5V7A1.75 1.75 0 0 1 7.5 5.25M6 15h6m2 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k6zfnr3_m {
  d: path("M11.415 19.5H6.5q-.172 0-.343-.017t-.34-.05t-.333-.084t-.323-.115q-.159-.066-.311-.147t-.294-.177q-.143-.095-.276-.204q-.133-.11-.255-.231q-.121-.122-.231-.255q-.109-.133-.204-.276q-.096-.142-.177-.294t-.147-.311t-.115-.323t-.084-.333q-.033-.169-.05-.34T3 16V6q0-.172.017-.343t.05-.34t.084-.333t.115-.323q.066-.159.147-.311t.177-.294q.095-.143.204-.276q.11-.133.231-.255q.122-.121.255-.231q.133-.109.276-.204q.142-.096.294-.177t.311-.147q.158-.065.323-.115t.333-.084t.34-.05T6.5 2.5h8q.172 0 .343.017t.34.05q.168.034.333.084t.323.115q.159.066.311.147t.294.177t.276.204q.133.11.255.231q.121.122.231.255q.109.133.204.276q.096.142.177.294t.147.311q.065.158.115.323t.084.333q.033.169.05.34T18 6v6.242");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}
</style><g class="hntgybcog"><path class="k6zfnr3_m"/><path class="e0eurhbxr"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix:crypto-atm",
	});
}

export default Component;
