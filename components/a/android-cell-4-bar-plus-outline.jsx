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
		"content": `<style>.kz9-qkbff {
  fill: currentColor;
  d: path("M2.866 19v-6.577h1.692V19zm5.519 0v-8.884h1.692V19zm11.038-7.379V5h1.693v6.906q-.406-.17-.823-.236t-.87-.049M13.903 19V7.789h1.693v5.867q-.45.598-.696 1.321t-.246 1.523q0 .699.186 1.325q.185.627.506 1.175zm5.136 0v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="kz9-qkbff"/>`,
		"fallback": "material-symbols-light:android-cell-4-bar-plus-outline",
	});
}

export default Component;
