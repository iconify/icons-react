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
		"content": `<style>.kq-upibsw {
  fill: currentColor;
  d: path("m240.49 104.49l-96 96a12 12 0 0 1-17 0L36 109v43a12 12 0 0 1-24 0V80a12 12 0 0 1 12-12h72a12 12 0 0 1 0 24H53l83 83l87.51-87.52a12 12 0 0 1 17 17Z");
}
</style><path class="kq-upibsw"/>`,
		"fallback": "ph:arrow-elbow-left-bold",
	});
}

export default Component;
