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
		"content": `<style>.i46drvbai {
  fill: currentColor;
  d: path("M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6m-94-50a14 14 0 1 0-14-14a14 14 0 0 0 14 14m0 100a14 14 0 1 0 14 14a14 14 0 0 0-14-14");
}
</style><path class="i46drvbai"/>`,
		"fallback": "ph:divide-light",
	});
}

export default Component;
