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
		"content": `<style>.oaezn4bal {
  fill: currentColor;
  d: path("M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2M9 8c1.65 0 3 1.35 3 3s-1.35 3-3 3s-3-1.35-3-3s1.35-3 3-3M2.08 19c1.38-2.39 3.96-4 6.92-4s5.54 1.61 6.92 4zm18.89-9.15l-.75 1.3l-1.47-.85V12h-1.5v-1.7l-1.47.85l-.75-1.3L16.5 9l-1.47-.85l.75-1.3l1.47.85V6h1.5v1.7l1.47-.85l.75 1.3L19.5 9z");
}
</style><path class="oaezn4bal"/>`,
		"fallback": "ic:baseline-contact-emergency",
	});
}

export default Component;
