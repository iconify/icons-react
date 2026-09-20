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
		"content": `<style>.p85e3om7s {
  fill: currentColor;
  d: path("M1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2zm6-4h10v-2h2V7h-2V5H7v2H5v10h2zm.8-3l3.4-9h1.6l3.4 9h-1.55l-.8-2.3H10.2L9.4 16zm2.85-3.6h2.7l-1.3-3.75h-.1z");
}
</style><path class="p85e3om7s"/>`,
		"fallback": "material-symbols:format-shapes-sharp",
	});
}

export default Component;
