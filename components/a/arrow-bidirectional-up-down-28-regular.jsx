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
		"content": `<style>.cw9lh_m5a {
  fill: currentColor;
  d: path("M13.75 3c.199 0 .39.08.53.22l6 6a.75.75 0 1 1-1.06 1.06L14.5 5.56v16.88l4.72-4.72a.75.75 0 0 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06L13 22.44V5.56l-4.72 4.72a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 .53-.22");
}
</style><path class="cw9lh_m5a"/>`,
		"fallback": "fluent:arrow-bidirectional-up-down-28-regular",
	});
}

export default Component;
