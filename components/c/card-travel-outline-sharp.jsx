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
		"content": `<style>.u2y-e545n {
  fill: currentColor;
  d: path("M4 19h16v-2H4zm-2 2V6h5V2h10v4h5v15zm2-7h16V8h-3v2h-2V8H9v2H7V8H4zm5-8h6V4H9zM4 19V8v2v-2v2v-2z");
}
</style><path class="u2y-e545n"/>`,
		"fallback": "material-symbols:card-travel-outline-sharp",
	});
}

export default Component;
