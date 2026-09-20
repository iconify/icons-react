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
		"content": `<style>.ng4ykab_y {
  fill: currentColor;
  d: path("M6.192 12h1.616v-1.616H6.192zM10 12h1.616v-1.616H10zm3.808 3.808h1.615v-1.616h-1.615zm0-3.808h1.615v-1.616h-1.615zM3 19V5h18v14zm1-1h16V6H4zm0 0V6z");
}
</style><path class="ng4ykab_y"/>`,
		"fallback": "material-symbols-light:image-aspect-ratio-outline-sharp",
	});
}

export default Component;
