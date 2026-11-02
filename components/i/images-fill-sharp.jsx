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
		"content": `<style>.x9wed5b_p {
  fill: currentColor;
  d: path("M7 2h14a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V4H7a1 1 0 0 1 0-2M2 16.586V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9.586l-3.293-3.293a1 1 0 0 0-1.414 0L12 14.586l-3.293-3.293a1 1 0 0 0-1.414 0Zm15.707 2.535a1 1 0 0 0 .293.203V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.676a1 1 0 0 0 .293-.203L8 13.414l3.293 3.293a1 1 0 0 0 1.414 0L14 15.414Z");
}
</style><path class="x9wed5b_p"/>`,
		"fallback": "coolicons:images-fill-sharp",
	});
}

export default Component;
