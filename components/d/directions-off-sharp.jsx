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
		"content": `<style>.tzxhe8ecf {
  fill: currentColor;
  d: path("M20.475 23.3L16 18.8l-4 4L1.2 12l5.425-5.425L12.25 12.2V15L.675 3.5L2.1 2.075l19.8 19.8zM8 15h2v-3h2.025l-2-2H9q-.425 0-.712.288T8 11zm10.85.95l-3.4-3.4L17 11l-3.5-3.5V10h-.6L8.05 5.15L12 1.2L22.8 12z");
}
</style><path class="tzxhe8ecf"/>`,
		"fallback": "material-symbols:directions-off-sharp",
	});
}

export default Component;
