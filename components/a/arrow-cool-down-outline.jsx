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
		"content": `<style>.lrg07l4or {
  fill: currentColor;
  d: path("m12 21l-6.346-6.346l.688-.713l5.158 5.157v-7.117h1v7.136l5.158-5.152l.688.689zm-.5-11.02v-3h1v3zm0-5v-2h1v2z");
}
</style><path class="lrg07l4or"/>`,
		"fallback": "material-symbols-light:arrow-cool-down-outline",
	});
}

export default Component;
