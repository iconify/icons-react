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
		"content": `<style>.h2qzchbgy {
  fill: currentColor;
  d: path("M11 16v-6H8V8h8v2h-3v6zM1 23v-6h2V7H1V1h6v2h10V1h6v6h-2v10h2v6h-6v-2H7v2zm6-4h10v-2h2V7h-2V5H7v2H5v10h2z");
}
</style><path class="h2qzchbgy"/>`,
		"fallback": "material-symbols:insert-text-sharp",
	});
}

export default Component;
