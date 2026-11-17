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
		"content": `<style>.k8eqy2k0a {
  fill: currentColor;
  d: path("M20 12c0 1.039-.578 1.992-1.293 2.707l-5 5a2.414 2.414 0 0 1-3.414 0l-5-5C4.578 13.992 4 13.039 4 12V6c0-.898.572-1.928 1.521-2.089a1.34 1.34 0 0 1 1.186.382l5 5a.414.414 0 0 0 .586 0l5-5a1.36 1.36 0 0 1 1.186-.382C19.428 4.072 20 5.102 20 6Z");
}
</style><path class="k8eqy2k0a"/>`,
		"fallback": "coolicons:arrow-badge-down-fill-round",
	});
}

export default Component;
