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
		"content": `<style>.nykqpto6t {
  fill: currentColor;
  d: path("M11.349 2.1a3.75 3.75 0 0 1 5.303 0l9.252 9.25a3.75 3.75 0 0 1 0 5.304l-9.252 9.251a3.75 3.75 0 0 1-5.303 0l-9.251-9.25a3.75 3.75 0 0 1 0-5.305zm4.242 1.06a2.25 2.25 0 0 0-3.182 0l-9.25 9.252a2.25 2.25 0 0 0 0 3.182l9.25 9.25a2.25 2.25 0 0 0 3.182 0l9.252-9.25a2.25 2.25 0 0 0 0-3.182zm-.871 4.06a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72h-2.69a2.25 2.25 0 0 0-2.25 2.25v4.5a.75.75 0 0 1-1.5 0v-4.5A3.75 3.75 0 0 1 13.75 10h2.69l-1.72-1.72a.75.75 0 0 1 0-1.06");
}
</style><path class="nykqpto6t"/>`,
		"fallback": "fluent:directions-28-regular",
	});
}

export default Component;
