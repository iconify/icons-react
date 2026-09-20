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
		"content": `<style>.jc4f95bww {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm3.076-3.5h1v-4h4.616v4h1v-9h-1v4H9.692v-4h-1z");
}
</style><path class="jc4f95bww"/>`,
		"fallback": "material-symbols-light:h-mobiledata-badge",
	});
}

export default Component;
