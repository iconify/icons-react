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
		"content": `<style>.eh1witdeo {
  fill: currentColor;
  d: path("M2 7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm3.236 1.832a3 3 0 1 0 5.527 2.335a3 3 0 0 0-5.527-2.335M18 10h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2M5 17h6a1 1 0 0 0 1-1c0-.257-.075-.506-.209-.725C11.124 14.188 9.099 14 8 14s-3.124.188-3.791 1.275A1.4 1.4 0 0 0 4 16a1 1 0 0 0 1 1m10-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Z");
}
</style><path class="eh1witdeo"/>`,
		"fallback": "coolicons:id-card-fill",
	});
}

export default Component;
