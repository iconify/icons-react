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
		"content": `<style>.uw4wfdc_s {
  fill: currentColor;
  d: path("M4 18V6h16v12zm1-1h14V7H5zm0 0V7z");
}
</style><path class="uw4wfdc_s"/>`,
		"fallback": "material-symbols-light:crop-7-5-outline-sharp",
	});
}

export default Component;
