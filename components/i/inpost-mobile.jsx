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
		"content": `<style>.ao4x-pbaq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("M25.62 37.423L21.312 43.5m-.748-12.002l-6.618 3.405m4.857-10.922l-7.44.001m9.295-7.482l-6.622-3.398m11.816-2.509L21.568 4.5");
}

.m9kq-rqrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.712 28.495l2.872-1.3c-5.108-2.82-2.985-12.905 7.053-16.07a13.051 13.051 0 1 0 0 25.891c-3.761-1.314-7.989-2.742-9.925-8.52");
}
</style><path class="ao4x-pbaq"/><path class="m9kq-rqrm"/>`,
		"fallback": "arcticons:inpost-mobile",
	});
}

export default Component;
