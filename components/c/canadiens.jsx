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
		"content": `<style>.h9y4jz3cp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.466 23.241s-3.981-5.11-15.278-5.11s-12.964 3.52-12.964 6.09s3.479 6.067 13.628 6.067s15.205-4.895 15.205-4.895l3.443 5.164s-7.208 6.025-19.365 6.025S4.5 30.629 4.5 24.222c0-5.984 5.595-12.804 19.5-12.804c8.128 0 11.808 2.302 11.808 2.302l.753-.7l5.003 1.345c.322 1.883 1.13 4.95 1.13 4.95zm-18.79-4.978V30.07m7.385-11.722v11.797M20.676 24h7.385");
}
</style><path class="h9y4jz3cp"/>`,
		"fallback": "arcticons:canadiens",
	});
}

export default Component;
