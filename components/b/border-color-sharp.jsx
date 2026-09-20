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
		"content": `<style>.osw3g-k7q {
  fill: currentColor;
  d: path("M2 24v-4h20v4zm2-6v-4.25l12.625-12.6l4.2 4.275L8.25 18zM16.6 6.8L18 5.4L16.6 4l-1.4 1.4z");
}
</style><path class="osw3g-k7q"/>`,
		"fallback": "material-symbols:border-color-sharp",
	});
}

export default Component;
