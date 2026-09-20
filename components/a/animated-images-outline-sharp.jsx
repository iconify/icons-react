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
		"content": `<style>.clphz0b7d {
  fill: currentColor;
  d: path("m12 13.5l6-4l-6-4zm.825 5.5h5.425l.175 1.325l-14.725 1.8L1.85 7.2L5 6.85v2l-.9.125L5.45 19.9zM7 17V2h15v15zm2-2h11V4H9zm5.5-5.5");
}
</style><path class="clphz0b7d"/>`,
		"fallback": "material-symbols:animated-images-outline-sharp",
	});
}

export default Component;
