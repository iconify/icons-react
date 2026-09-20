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
		"content": `<style>.l1r8iiykb {
  fill: currentColor;
  d: path("M4.646 4.854a.5.5 0 0 0 .708 0L7.5 2.707V9.5a.5.5 0 0 0 1 0V2.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708M8 15a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="l1r8iiykb"/>`,
		"fallback": "fluent:arrow-step-out-16-filled",
	});
}

export default Component;
