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
		"content": `<style>.i-gjwwbyp {
  fill: currentColor;
  d: path("m12 18l-6-6l1.4-1.4l3.6 3.6V5h2v9.2l3.6-3.6L18 12z");
}
</style><path class="i-gjwwbyp"/>`,
		"fallback": "material-symbols:arrow-downward-alt-sharp",
	});
}

export default Component;
