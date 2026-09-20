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
		"content": `<style>.es2s7mbhu {
  fill: currentColor;
  d: path("M20.11 21.53L18.579 20H4V5.421L2.47 3.885l.707-.708l17.646 17.646l-.713.708ZM7 16.5h8.079l-2.556-2.537l-1.138 1.512L9.5 13.192L7 16.5Zm13 .675L6.825 4H20v13.175Z");
}
</style><path class="es2s7mbhu"/>`,
		"fallback": "material-symbols-light:image-not-supported-sharp",
	});
}

export default Component;
