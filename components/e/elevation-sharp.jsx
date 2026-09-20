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
		"content": `<style>.w4zmg3v2i {
  fill: currentColor;
  d: path("m3.685 19.192l5.007-7h5.012l5.988-6.988v13.988zm.038-4.401l-.792-.574l3.858-5.41h5.03l4.508-5.282l.77.666l-4.84 5.617H7.29z");
}
</style><path class="w4zmg3v2i"/>`,
		"fallback": "material-symbols-light:elevation-sharp",
	});
}

export default Component;
