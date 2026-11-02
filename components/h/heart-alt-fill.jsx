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
		"content": `<style>.vlmmwbu-j {
  fill: currentColor;
  d: path("m12 5.586l.293-.293a5.243 5.243 0 0 1 7.414 7.414l-6 6a2.414 2.414 0 0 1-3.414 0l-6-6a5.243 5.243 0 0 1 7.414-7.414Z");
}
</style><path class="vlmmwbu-j"/>`,
		"fallback": "coolicons:heart-alt-fill",
	});
}

export default Component;
