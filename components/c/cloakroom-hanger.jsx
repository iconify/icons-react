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
		"content": `<style>.ofv50pbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 11l-9 7q-1 1 .5 1h17q1.5 0 .5-1ZM9.75 7A2.25 2.25 0 1 1 12 9.25V11");
}
</style><path class="ofv50pbxw"/>`,
		"fallback": "uix:cloakroom-hanger",
	});
}

export default Component;
