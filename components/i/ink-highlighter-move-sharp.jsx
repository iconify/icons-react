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
		"content": `<style>.jlq6grolz {
  fill: currentColor;
  d: path("m4.577 20.23l2.535-2.534l-.731-.73v-1.132l5.45-5.45l4.015 4.016l-5.45 5.45h-1.13l-.77-.77l-1.15 1.15zm7.967-10.559l6.087-6.086L22.646 7.6l-6.087 6.087zM14.852 4H8V3h7.852zm-3.385 3.385H5v-1h7.467zm-3.384 3.384H2v-1h7.083z");
}
</style><path class="jlq6grolz"/>`,
		"fallback": "material-symbols-light:ink-highlighter-move-sharp",
	});
}

export default Component;
