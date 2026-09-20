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
		"content": `<style>.nltnj-wtr {
  fill: currentColor;
  d: path("M8.77 17V4h6.46v13zm1-1h4.46V5H9.77zm-1 3.385v-1h6.46v1zm1-3.385h4.46z");
}
</style><path class="nltnj-wtr"/>`,
		"fallback": "material-symbols-light:general-device-outline-sharp",
	});
}

export default Component;
