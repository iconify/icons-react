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
		"content": `<style>.np36fhowe {
  fill: currentColor;
  d: path("M3 21h3v-3H3zm5 0h3v-3H8zm5 0h3v-3h-3zm5 0h3v-3h-3zM3 6h3V3H3zm0 5h3V8H3zm0 5h3v-3H3zM8 6h3V3H8zm0 5h3V8H8zm0 5h3v-3H8zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3zm5-10h3V3h-3zm0 5h3V8h-3zm0 5h3v-3h-3z");
}
</style><path class="np36fhowe"/>`,
		"fallback": "material-symbols:background-grid-small-sharp",
	});
}

export default Component;
