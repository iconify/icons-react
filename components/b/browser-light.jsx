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
		"content": `<style>.hwpl3sbzg {
  fill: currentColor;
  d: path("M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14M40 54h176a2 2 0 0 1 2 2v34H38V56a2 2 0 0 1 2-2m176 148H40a2 2 0 0 1-2-2v-98h180v98a2 2 0 0 1-2 2");
}
</style><path class="hwpl3sbzg"/>`,
		"fallback": "ph:browser-light",
	});
}

export default Component;
