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
		"content": `<style>.n1km3rguj {
  fill: currentColor;
  d: path("M6 19V8.5h11.079l-3.792-3.786L14 4l5 5l-5.006 5.006l-.707-.714L17.079 9.5H7V19z");
}
</style><path class="n1km3rguj"/>`,
		"fallback": "material-symbols-light:arrow-top-right-outline",
	});
}

export default Component;
