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
		"content": `<style>.x99jzkbnp {
  fill: currentColor;
  d: path("M6.192 12h1.616v-1.616H6.192zM10 12h1.616v-1.616H10zm3.808 3.808h1.615v-1.616h-1.615zm0-3.808h1.615v-1.616h-1.615zM3 19V5h18v14z");
}
</style><path class="x99jzkbnp"/>`,
		"fallback": "material-symbols-light:image-aspect-ratio-sharp",
	});
}

export default Component;
