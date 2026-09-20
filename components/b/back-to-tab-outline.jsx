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
		"content": `<style>.gsbnfhb0n {
  fill: currentColor;
  d: path("M8.275 11.7L4 7.425V11H2V4h7v2H5.4l4.3 4.275zM4 20q-.825 0-1.412-.587T2 18v-5h2v5h8v2zm16-7V6h-9V4h9q.825 0 1.413.588T22 6v7zm2 2v5h-8v-5z");
}
</style><path class="gsbnfhb0n"/>`,
		"fallback": "material-symbols:back-to-tab-outline",
	});
}

export default Component;
