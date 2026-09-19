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
		"content": `<style>.bw7_jnhme {
  cx: 13.427px;
  cy: 28.218px;
  r: 8.927px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.chbq5n17b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.967 29.366l-2.986-2.987l2.986-2.986m-2.986 2.987h8.734m-23.666-1.987l1.966 1.966l-1.966 1.965m1.966-1.965H8.373");
}

.mgxa4nk7c {
  cx: 29.741px;
  cy: 24px;
  r: 13.759px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="mgxa4nk7c"/><circle class="bw7_jnhme"/><path class="chbq5n17b"/>`,
		"fallback": "arcticons:freifunk-karte",
	});
}

export default Component;
