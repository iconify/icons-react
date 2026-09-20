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
		"content": `<style>.mzs2pl16h {
  fill: currentColor;
  d: path("M2 4V2h20v2zm0 18v-2h20v2zm8.5-4.5V6h3v11.5z");
}
</style><path class="mzs2pl16h"/>`,
		"fallback": "material-symbols:align-self-stretch",
	});
}

export default Component;
