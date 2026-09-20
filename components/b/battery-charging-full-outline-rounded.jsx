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
		"content": `<style>.vdlb5dluc {
  fill: currentColor;
  d: path("M16.577 18.846h-.858q-.223 0-.341-.195t-.001-.407l1.676-3.021q.084-.127.227-.096t.143.197v1.83h.858q.223 0 .341.195t.001.407l-1.676 3.021q-.083.127-.227.096t-.143-.197zM8.692 21q-.343 0-.575-.232t-.233-.576V5.288q0-.343.233-.575t.575-.232h1.616v-.673q0-.344.232-.576T11.116 3h1.769q.343 0 .575.232t.232.576v.673h1.62q.344 0 .574.232t.23.575v6.27q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V5.462H8.885V20h2.582q.213 0 .357.144t.143.357t-.143.356t-.357.143z");
}
</style><path class="vdlb5dluc"/>`,
		"fallback": "material-symbols-light:battery-charging-full-outline-rounded",
	});
}

export default Component;
