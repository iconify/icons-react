import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ve51gmn1a {
  fill: currentColor;
  d: path("M5.28 6.28a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06L8.5 4.56v6.88l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L7 11.44V4.56z");
}
</style><path class="ve51gmn1a"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-16-filled",
	});
}

export default Component;
