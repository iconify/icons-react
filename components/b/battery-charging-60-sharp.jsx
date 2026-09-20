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
		"content": `<style>.fq_0iwbdg {
  fill: currentColor;
  d: path("M7.885 21V4.48h2.423V3h3.384v1.48h2.424v7.712q-2.135.275-3.587 1.898t-1.452 3.852q0 .843.227 1.618t.663 1.44zm1-8.808h6.23v-6.73h-6.23zm7.692 9.289v-2.635h-1.539l2.385-4.327v2.635h1.539z");
}
</style><path class="fq_0iwbdg"/>`,
		"fallback": "material-symbols-light:battery-charging-60-sharp",
	});
}

export default Component;
