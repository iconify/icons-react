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
		"content": `<style>.eg-wo3m5k {
  fill: currentColor;
  d: path("M14.52 19v-1H18v-5.79h2v-.42h-2V6h-3.48V5H19v5.946h2v2.108h-2V19zM5 19v-5.946H3v-2.108h2V5h4.48v1H6v5.79H4v.42h2V18h3.48v1z");
}
</style><path class="eg-wo3m5k"/>`,
		"fallback": "material-symbols-light:data-object-outline-sharp",
	});
}

export default Component;
