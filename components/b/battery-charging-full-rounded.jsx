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
		"content": `<style>.uig11m0jm {
  fill: currentColor;
  d: path("M16.577 18.846h-.858q-.223 0-.341-.195t-.001-.407l1.676-3.021q.084-.127.227-.096t.143.197v1.83h.858q.223 0 .341.195t.001.407l-1.676 3.021q-.083.127-.227.096t-.143-.197zM8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616v-.673q0-.344.232-.576T11.116 3h1.769q.343 0 .575.232t.232.576v.673h1.62q.344 0 .574.232t.23.575v6.421q0 .213-.133.367q-.133.155-.35.205q-.916.202-1.7.668q-.785.466-1.386 1.14q-.687.769-1.079 1.75t-.391 2.103q0 .565.098 1.092t.294 1.016q.143.348-.048.649q-.19.301-.538.301z");
}
</style><path class="uig11m0jm"/>`,
		"fallback": "material-symbols-light:battery-charging-full-rounded",
	});
}

export default Component;
