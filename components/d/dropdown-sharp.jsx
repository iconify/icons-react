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
		"content": `<style>.atr7d-maa {
  fill: currentColor;
  d: path("M11 13h7V6h-7zm-8 8V3h18v18z");
}
</style><path class="atr7d-maa"/>`,
		"fallback": "material-symbols:dropdown-sharp",
	});
}

export default Component;
