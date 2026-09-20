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
		"content": `<style>.fuz9-gbmp {
  fill: currentColor;
  d: path("M196 80v32a4 4 0 0 1-8 0V84h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M96 172H68v-28a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8M228 56v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z");
}
</style><path class="fuz9-gbmp"/>`,
		"fallback": "ph:frame-corners-thin",
	});
}

export default Component;
