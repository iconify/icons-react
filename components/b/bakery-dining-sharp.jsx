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
		"content": `<style>.ziopnabev {
  fill: currentColor;
  d: path("m20.45 18.2l-1.95-.95l1.825-4.5l2.2 4.25zM15.5 17l.85-9.425l3.8 1.525L17 17zM7 17L3.85 9.1l3.8-1.525L8.5 17zm-3.45 1.2L1.475 17l2.2-4.25l1.825 4.5zM10 17L9 6h6l-1 11z");
}
</style><path class="ziopnabev"/>`,
		"fallback": "material-symbols:bakery-dining-sharp",
	});
}

export default Component;
