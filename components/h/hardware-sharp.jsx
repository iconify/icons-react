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
		"content": `<style>.yuci_-n_f {
  fill: currentColor;
  d: path("M10.27 11.5V7H5.845q.289-1.325 1.357-2.162Q8.27 4 9.653 4h4.616v2.885L17.154 4h1v6.77h-1l-2.885-2.885V11.5zm0 8.5v-7.48h4V20z");
}
</style><path class="yuci_-n_f"/>`,
		"fallback": "material-symbols-light:hardware-sharp",
	});
}

export default Component;
