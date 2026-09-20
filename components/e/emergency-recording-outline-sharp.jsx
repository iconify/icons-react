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
		"content": `<style>.ci2fv0bmn {
  fill: currentColor;
  d: path("M9 17h2v-3.275l3 1.725l1-1.725L12 12l3-1.725l-1-1.725l-3 1.725V7H9v3.275L6 8.55l-1 1.725L8 12l-3 1.725l1 1.725l3-1.725zm-7 3V4h16v6.5l4-4v11l-4-4V20zm2-2h12V6H4zm0 0V6z");
}
</style><path class="ci2fv0bmn"/>`,
		"fallback": "material-symbols:emergency-recording-outline-sharp",
	});
}

export default Component;
