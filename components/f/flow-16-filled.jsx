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
		"content": `<style>.mjy3fcbni {
  fill: currentColor;
  d: path("M10.05 6H9.5a1 1 0 0 0-1 1v2a2 2 0 0 1-2 2h-.55a2.5 2.5 0 1 1 0-1h.55a1 1 0 0 0 1-1V7a2 2 0 0 1 2-2h.55a2.5 2.5 0 1 1 0 1");
}
</style><path class="mjy3fcbni"/>`,
		"fallback": "fluent:flow-16-filled",
	});
}

export default Component;
