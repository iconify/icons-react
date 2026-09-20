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
		"content": `<style>.i3h2hab6a {
  fill: currentColor;
  d: path("M3.28 2.22a.75.75 0 1 0-1.06 1.06l.848.849A3.74 3.74 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21H7v3.296c0 1.427 1.616 2.254 2.774 1.419L16.309 21h3.63l4.78 4.78a.75.75 0 0 0 1.061-1.06zM6.182 3l17.65 17.65A3.75 3.75 0 0 0 26 17.25V6.75A3.75 3.75 0 0 0 22.25 3z");
}
</style><path class="i3h2hab6a"/>`,
		"fallback": "fluent:comment-off-28-filled",
	});
}

export default Component;
