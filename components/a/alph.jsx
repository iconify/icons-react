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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.i778eoxqe {
  fill: var(--svg-color--e95b4d, #e95b4d);
  d: path("M17.865 3.363c0-.235-.192-.395-.432-.358l-2.868.459a.52.52 0 0 0-.432.49V9.1c0 .229.192.389.432.352l2.868-.459a.52.52 0 0 0 .432-.49V3.357z");
}

.u0l1wcbxs {
  fill: var(--svg-color--080515, #080515);
  d: path("M10.294 4.36a.68.68 0 0 0-.683-.353l-3.161.534c-.267.042-.384.266-.272.506l6.995 14.593a.685.685 0 0 0 .688.352l3.156-.533c.267-.043.384-.267.272-.507zM9.867 14.9c0-.229-.192-.389-.432-.352l-2.863.459a.52.52 0 0 0-.437.49v5.146c0 .229.197.389.437.352l2.863-.459a.52.52 0 0 0 .432-.49z");
}
</style><g class="ft5dv1b6b"><path class="u0l1wcbxs"/><path class="i778eoxqe"/></g>`,
		"fallback": "token-branded:alph",
	});
}

export default Component;
