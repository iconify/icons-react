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
		"content": `<style>.h0bvkcbfe {
  fill: currentColor;
  d: path("M12.77 16.5h-10v-13h1v12h9zm5.36 3.577L15.386 14.5H5.654v-11h5v7h4.821l3.571 7.292l2.527-1.067l.752 1.433z");
}
</style><path class="h0bvkcbfe"/>`,
		"fallback": "material-symbols-light:airline-seat-legroom-extra-outline-sharp",
	});
}

export default Component;
