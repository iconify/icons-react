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
		"content": `<style>.s9o-16y6b {
  fill: currentColor;
  d: path("M8 2a4.5 4.5 0 0 0-4.5 4.5v2.401l-.964 2.414A.5.5 0 0 0 3 12h10a.5.5 0 0 0 .464-.685L12.5 8.9V6.5A4.5 4.5 0 0 0 8 2m0 12.5A2 2 0 0 1 6.063 13h3.874A2 2 0 0 1 8 14.5");
}
</style><path class="s9o-16y6b"/>`,
		"fallback": "fluent:alert-16-filled",
	});
}

export default Component;
