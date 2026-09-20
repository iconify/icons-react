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
		"content": `<style>.fxeu9s92i {
  fill: currentColor;
  d: path("M3 20.077V4.616q0-.691.463-1.153T4.615 3h14.77q.69 0 1.152.463T21 4.616v10.769q0 .69-.463 1.153T19.385 17H6.077zm9-5.654q.262 0 .439-.177q.176-.177.176-.438t-.177-.439t-.438-.177t-.438.177t-.177.439t.177.438t.438.177m-.5-2.961h1V5.385h-1z");
}
</style><path class="fxeu9s92i"/>`,
		"fallback": "material-symbols-light:feedback",
	});
}

export default Component;
