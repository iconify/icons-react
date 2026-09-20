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
		"content": `<style>.fv7-wjr_l {
  fill: currentColor;
  d: path("M4.47 20q-.195 0-.332-.154Q4 19.692 4 19.49t.116-.36t.303-.207l4.35-.835l.929-12.582q.043-.635.503-1.07T11.294 4h1.387q.634 0 1.094.436q.46.435.521 1.07l.929 12.583l4.325.834q.194.048.322.204t.128.356q0 .211-.144.364q-.143.153-.356.153zm6.338-1.827h2.384V6.193q0-.507-.341-.85T12.003 5t-.85.343q-.345.342-.345.85z");
}
</style><path class="fv7-wjr_l"/>`,
		"fallback": "material-symbols-light:bike-dock-outline-rounded",
	});
}

export default Component;
