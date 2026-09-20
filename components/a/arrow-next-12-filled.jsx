import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bpkwwsq4b {
  fill: currentColor;
  d: path("M2.47 3.28a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06L3.53 9.78a.75.75 0 0 1-1.06-1.06L5.19 6zM9.75 10a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75");
}
</style><path class="bpkwwsq4b"/>`,
		"fallback": "fluent:arrow-next-12-filled",
	});
}

export default Component;
