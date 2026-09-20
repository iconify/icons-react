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
		"content": `<style>.l7uq90bnb {
  fill: currentColor;
  d: path("M5 2a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V8h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8V3a1 1 0 0 0-1-1z");
}
</style><path class="l7uq90bnb"/>`,
		"fallback": "fluent:doctor-12-filled",
	});
}

export default Component;
