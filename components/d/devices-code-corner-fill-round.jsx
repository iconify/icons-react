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
		"content": `<style>.wrlrv9b2a {
  fill: currentColor;
  d: path("M14 6a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0ZM4 8v4a3 3 0 0 0 3 3h3a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h4a1 1 0 0 1 0 2H7a3 3 0 0 0-3 3m11.707 9.707L14.414 19l1.293 1.293a.999.999 0 1 1-1.414 1.414l-2-2a1 1 0 0 1 0-1.414l2-2a.999.999 0 1 1 1.414 1.414m4-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a.999.999 0 1 1-1.414-1.414L19.586 19l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="wrlrv9b2a"/>`,
		"fallback": "coolicons:devices-code-corner-fill-round",
	});
}

export default Component;
