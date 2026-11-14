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
		"content": `<style>.ff2xh4nvg {
  d: path("M14.668 21.299q-.567.201-1.168.201h-6q-.172 0-.343-.017t-.34-.05t-.333-.084t-.323-.115q-.159-.066-.311-.147t-.294-.177q-.143-.095-.276-.204q-.133-.11-.255-.231q-.121-.122-.231-.255q-.109-.133-.204-.276q-.096-.142-.177-.294t-.147-.311q-.065-.158-.115-.323t-.084-.333q-.033-.169-.05-.34T4 18V6q0-.172.017-.343t.05-.34q.034-.168.084-.333t.115-.323t.147-.311t.177-.294q.095-.143.204-.276q.11-.133.231-.255q.122-.121.255-.231q.133-.109.276-.204q.142-.096.294-.177t.311-.147q.158-.065.323-.115t.333-.084t.34-.05T7.5 2.5h6q.172 0 .343.017t.34.05q.168.034.333.084t.323.115q.159.066.311.147t.294.177t.276.204q.133.11.255.231q.121.122.231.255q.109.133.204.276q.096.142.177.294t.147.311q.065.158.115.323t.084.333q.033.169.05.34T17 6v7.342M4 10h13M7 5.25v2m0 5.5v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qrtvxhffc {
  d: path("M14.75 17.5a5 5 0 0 1 7 0m-5 2a2.25 2.25 0 0 1 3 0m-1.5 2h.01");
}
</style><g class="hntgybcog"><path class="ff2xh4nvg"/><path class="qrtvxhffc"/></g>`,
		"fallback": "uix:fridge-smart",
	});
}

export default Component;
