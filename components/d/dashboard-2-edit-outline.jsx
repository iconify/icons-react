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
		"content": `<style>.bsz0_cbgs {
  fill: currentColor;
  d: path("M11.192 10.808V5H21v5.808zM3 19v-5.808h8.808V19zm0-8.192V5h5.808v5.808zm9.192-1H20V6h-7.808zM4 18h6.808v-3.808H4zm0-8.192h3.808V6H4zM14.23 21v-2.21l5.334-5.307q.148-.148.305-.2q.158-.052.315-.052q.172 0 .338.064q.166.065.301.194l.925.944q.129.148.19.308q.062.159.062.319t-.061.322t-.191.31L16.44 21zm6.886-5.94l-.925-.945zm-6 5.056h.95l3.467-3.474l-.47-.475l-.455-.488l-3.492 3.486zm3.948-3.949l-.456-.488l.925.963z");
}
</style><path class="bsz0_cbgs"/>`,
		"fallback": "material-symbols-light:dashboard-2-edit-outline",
	});
}

export default Component;
