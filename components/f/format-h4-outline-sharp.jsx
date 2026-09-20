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
		"content": `<style>.snwv1qmfj {
  fill: currentColor;
  d: path("M3 17V7h2v4h4V7h2v10H9v-4H5v4zm15 0v-3h-5V7h2v5h3V7h2v5h2v2h-2v3z");
}
</style><path class="snwv1qmfj"/>`,
		"fallback": "material-symbols:format-h4-outline-sharp",
	});
}

export default Component;
