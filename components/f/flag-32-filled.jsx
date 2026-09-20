import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.u3bc16iph {
  fill: currentColor;
  d: path("M6.5 3A1.5 1.5 0 0 0 5 4.5V28a1 1 0 1 0 2 0v-7h21a1 1 0 0 0 .8-1.6L23.25 12l5.55-7.4A1 1 0 0 0 28 3z");
}
</style><path class="u3bc16iph"/>`,
		"fallback": "fluent:flag-32-filled",
	});
}

export default Component;
