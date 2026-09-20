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
		"content": `<style>.dqudn3bls {
  fill: currentColor;
  d: path("M18.25 15.5h-5a.75.75 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0V14h4.25a.75.75 0 0 1 0 1.5M14 2C7.372 2 2 7.373 2 14s5.372 12 12 12c6.627 0 12-5.373 12-12S20.627 2 14 2");
}
</style><path class="dqudn3bls"/>`,
		"fallback": "fluent:clock-28-filled",
	});
}

export default Component;
