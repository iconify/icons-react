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
		"content": `<style>.pcaqf3bdn {
  fill: currentColor;
  d: path("m12 21.77l-7-5.25V3h14v13.52zm0-1.27l6-4.48V4H6v12.02zm-1.05-6.192l4.958-4.958l-.708-.72l-4.25 4.25l-2.138-2.138l-.72.708zM12 4H6h12z");
}
</style><path class="pcaqf3bdn"/>`,
		"fallback": "material-symbols-light:beenhere-outline-sharp",
	});
}

export default Component;
