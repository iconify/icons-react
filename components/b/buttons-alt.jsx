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
		"content": `<style>.tsjchzd0n {
  fill: currentColor;
  d: path("M4.616 17q-.691 0-1.153-.462T3 15.378V8.622q0-.697.463-1.16T4.615 7h14.77q.69 0 1.152.463T21 8.622v6.756q0 .697-.463 1.16T19.385 17zm2.942-2.5h.884v-2.058H10.5v-.884H8.442V9.5h-.884v2.058H5.5v.884h2.058z");
}
</style><path class="tsjchzd0n"/>`,
		"fallback": "material-symbols-light:buttons-alt",
	});
}

export default Component;
