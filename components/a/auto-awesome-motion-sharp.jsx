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
		"content": `<style>.ccmaxdsxo {
  fill: currentColor;
  d: path("M11 21V11h10v10zm-4-3.77V7h10.23v1H8v9.23zm-4-4V3h10.23v1H4v9.23z");
}
</style><path class="ccmaxdsxo"/>`,
		"fallback": "material-symbols-light:auto-awesome-motion-sharp",
	});
}

export default Component;
