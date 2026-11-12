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
		"content": `<style>.g23q2ac4g {
  fill: currentColor;
  d: path("m8.293 5.293l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414L13 5.414v9.757a3 3 0 1 1-2 0V5.414L9.707 6.707a.999.999 0 1 1-1.414-1.414");
}
</style><path class="g23q2ac4g"/>`,
		"fallback": "coolicons:git-push-fill-sharp",
	});
}

export default Component;
