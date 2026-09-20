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
		"content": `<style>.qtbkr_2mx {
  fill: currentColor;
  d: path("M9 8H4q0-2.075 1.463-3.537T9 3h6v3l3-3h2v8h-2l-3-3v13H9zm2 11h2v-6h-2zm0-8h2V5H9q-.65 0-1.225.263t-1 .737H11zm1 1");
}
</style><path class="qtbkr_2mx"/>`,
		"fallback": "material-symbols:hardware-outline-sharp",
	});
}

export default Component;
