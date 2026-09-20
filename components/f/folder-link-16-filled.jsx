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
		"content": `<style>.q9w98_b5s {
  fill: currentColor;
  d: path("M1 4.5A2.5 2.5 0 0 1 3.5 2h2.086a1.5 1.5 0 0 1 1.06.44L8 3.792l-2.06 2.06A.5.5 0 0 1 5.585 6H1zM1 7v4.5A2.5 2.5 0 0 0 3.5 14h2.837A3.5 3.5 0 0 1 9.5 9h4c.537 0 1.045.12 1.5.337V6.5A2.5 2.5 0 0 0 12.5 4H9.207l-2.56 2.56A1.5 1.5 0 0 1 5.585 7zm8.5 3a2.5 2.5 0 0 0 0 5h.5a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3h.5a.5.5 0 0 0 0-1zm3.5 0a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H13a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5");
}
</style><path class="q9w98_b5s"/>`,
		"fallback": "fluent:folder-link-16-filled",
	});
}

export default Component;
