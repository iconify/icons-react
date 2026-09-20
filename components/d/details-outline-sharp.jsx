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
		"content": `<style>.z1fv-_b_d {
  fill: currentColor;
  d: path("M3.692 20L12 5.058L20.308 20zM5.4 19h6.1V8.021zm7.1 0h6.1L12.5 8.021z");
}
</style><path class="z1fv-_b_d"/>`,
		"fallback": "material-symbols-light:details-outline-sharp",
	});
}

export default Component;
