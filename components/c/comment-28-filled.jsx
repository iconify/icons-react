import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.p9xm88lae {
  fill: currentColor;
  d: path("M5.75 3A3.75 3.75 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21H7v3.296c0 1.427 1.616 2.254 2.774 1.419L16.309 21h5.941A3.75 3.75 0 0 0 26 17.25V6.75A3.75 3.75 0 0 0 22.25 3z");
}
</style><path class="p9xm88lae"/>`,
		"fallback": "fluent:comment-28-filled",
	});
}

export default Component;
