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
		"content": `<style>.k6ti_9jxu {
  fill: currentColor;
  d: path("M2.866 19v-6.577h1.692V19zm5.519 0v-8.884h1.692V19zm5.519 0V7.789h1.692V19zm5.519 0V5h1.693v14z");
}
</style><path class="k6ti_9jxu"/>`,
		"fallback": "material-symbols-light:android-cell-4-bar-sharp",
	});
}

export default Component;
