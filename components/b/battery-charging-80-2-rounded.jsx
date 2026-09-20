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
		"content": `<style>.n_6y9hbju {
  fill: currentColor;
  d: path("M3.308 16.5q-.348 0-.578-.23t-.23-.578V8.308q0-.348.23-.578t.578-.23h11.238q.214 0 .357.143q.143.144.143.357t-.143.357t-.357.143H12.5v7h1.556q.213 0 .357.143t.143.357t-.143.357t-.357.143zm14.663-3.712h-2.19q-.248 0-.367-.207t.024-.42l2.196-3.39q.087-.13.22-.175q.134-.044.265.006t.212.171q.08.121.05.283l-.352 2.155h2.19q.248 0 .366.208t-.024.42l-2.196 3.39q-.086.13-.22.175t-.264-.006t-.212-.171q-.08-.121-.05-.283z");
}
</style><path class="n_6y9hbju"/>`,
		"fallback": "material-symbols-light:battery-charging-80-2-rounded",
	});
}

export default Component;
