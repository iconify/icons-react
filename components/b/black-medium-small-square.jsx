import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k9jca4tfl {
  fill: var(--svg-color--212121, #212121);
  d: path("M40.03 40.02h47.95v47.95H40.03z");
}
</style><path class="k9jca4tfl"/>`,
		"fallback": "noto-v1:black-medium-small-square",
	});
}

export default Component;
