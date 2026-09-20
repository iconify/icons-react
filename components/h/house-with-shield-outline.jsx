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
		"content": `<style>.tebuloh3c {
  fill: currentColor;
  d: path("M12 17.366q1.379-.349 2.286-1.588q.906-1.24.906-2.747v-2.044L12 9.385l-3.192 1.6v2.04q0 1.521.907 2.757T12 17.366M5 20V9.5l7-5.27l7 5.27V20zm1-1h12v-9l-6-4.5L6 10zm6-6.75");
}
</style><path class="tebuloh3c"/>`,
		"fallback": "material-symbols-light:house-with-shield-outline",
	});
}

export default Component;
