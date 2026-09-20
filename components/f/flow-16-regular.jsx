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
		"content": `<style>.e7_6s26us {
  fill: currentColor;
  d: path("M12.5 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.45 2a2.5 2.5 0 1 0 0-1H9.5a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1h-.55a2.5 2.5 0 1 0 0 1h.55a2 2 0 0 0 2-2V7a1 1 0 0 1 1-1zM5 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0");
}
</style><path class="e7_6s26us"/>`,
		"fallback": "fluent:flow-16-regular",
	});
}

export default Component;
