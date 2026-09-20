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
		"content": `<style>.duy63e0pn {
  fill: currentColor;
  d: path("m12 15.6l3.2-4.6h-2.85l2-7H9v8h3zM10 22v-8H7V2h10l-2 7h4zm2-10H9z");
}
</style><path class="duy63e0pn"/>`,
		"fallback": "material-symbols:flash-on-outline-sharp",
	});
}

export default Component;
