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
		"content": `<style>.r2atgqbyd {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10.252 9.472Q7 6.497 7 4.75Q7 1.5 10.25 1.5q1.094 0 1.75.601q.656-.601 1.75-.601Q17 1.5 17 4.75q0 1.747-3.252 4.722q1.595.429 2.848 1.682Q18.5 13.058 18.5 15.75t-1.904 4.596T12 22.25t-4.596-1.904T5.5 15.75t1.904-4.596q1.253-1.253 2.848-1.682M8.25 15.75Q8.25 12 12 12t3.75 3.75T12 19.5t-3.75-3.75");
}
</style><path class="r2atgqbyd"/>`,
		"fallback": "uix-solid:heart-rings",
	});
}

export default Component;
