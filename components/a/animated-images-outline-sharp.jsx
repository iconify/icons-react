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
		"content": `<style>.c9o9q37gq {
  fill: currentColor;
  d: path("m12.5 12.75l4.789-3.25L12.5 6.25zm4.383 5.712h1.444l.098.825l-13.84 1.742L2.927 8.065l2.612-.254v1L4.1 8.956L5.45 19.9zm-9.344-2V3H21v13.462zm1-1H20V4H8.539zm5.73-5.731");
}
</style><path class="c9o9q37gq"/>`,
		"fallback": "material-symbols-light:animated-images-outline-sharp",
	});
}

export default Component;
