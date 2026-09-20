import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rjbbwo8ue {
  fill: currentColor;
  d: path("M152 128a12 12 0 0 1-12 12h-12v12a12 12 0 0 1-24 0v-12H92a12 12 0 0 1 0-24h12v-12a12 12 0 0 1 24 0v12h12a12 12 0 0 1 12 12m72-48v96a28 28 0 0 1-28 28H28a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h168a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4H28a4 4 0 0 0-4 4v96a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4Zm44 12a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12");
}
</style><path class="rjbbwo8ue"/>`,
		"fallback": "ph:battery-plus-bold",
	});
}

export default Component;
