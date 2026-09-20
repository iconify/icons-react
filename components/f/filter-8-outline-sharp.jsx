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
		"content": `<style>.i8ew49baa {
  fill: currentColor;
  d: path("m12 10l-1 1v4h6v-4l-1-1l1-1V5h-6v4zm3-3v2h-2V7zm0 4v2h-2v-2zm-9 7V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4z");
}
</style><path class="i8ew49baa"/>`,
		"fallback": "material-symbols:filter-8-outline-sharp",
	});
}

export default Component;
