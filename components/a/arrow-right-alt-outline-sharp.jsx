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
		"content": `<style>.b72g2pb1t {
  fill: currentColor;
  d: path("m13.692 17.308l-.707-.72l4.088-4.088H5v-1h12.073l-4.088-4.088l.707-.72L19 12z");
}
</style><path class="b72g2pb1t"/>`,
		"fallback": "material-symbols-light:arrow-right-alt-outline-sharp",
	});
}

export default Component;
