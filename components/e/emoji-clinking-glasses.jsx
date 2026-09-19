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
		"content": `<style>.act8xmb2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.704 11.788H5.786m30.27-1.171L23.16 13.672M5.524 6.66a58 58 0 0 0-.024 1.6c0 10.904 3.018 19.743 6.74 19.743s6.74-8.84 6.74-19.742q-.002-.809-.024-1.6m2.943 2.017q.16.776.347 1.562c2.522 10.608 7.503 18.508 11.124 17.647s4.512-10.158 1.99-20.765a58 58 0 0 0-.394-1.552M12.24 28.564v12.918m-6.178 0h12.356M33.5 28.433l2.99 12.568m-6.011 1.429L42.5 39.571");
}
</style><path class="act8xmb2i"/>`,
		"fallback": "arcticons:emoji-clinking-glasses",
	});
}

export default Component;
