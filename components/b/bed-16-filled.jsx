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
		"content": `<style>.fa2hjccum {
  fill: currentColor;
  d: path("M7.5 6h1v-.5A.5.5 0 0 1 9 5h1.5a.5.5 0 0 1 .5.5V6h2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2h2v-.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5zm-4 1A2.5 2.5 0 0 0 1 9.5v4a.5.5 0 0 0 1 0V11h12v2.5a.5.5 0 0 0 1 0v-4A2.5 2.5 0 0 0 12.5 7z");
}
</style><path class="fa2hjccum"/>`,
		"fallback": "fluent:bed-16-filled",
	});
}

export default Component;
