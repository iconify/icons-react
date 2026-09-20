import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ti3i2nqtt {
  fill: currentColor;
  d: path("M16.293 3.707a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L19.586 9H6a1 1 0 0 1 0-2h13.586zm-4.586 12a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L8.414 21H22a1 1 0 1 0 0-2H8.414z");
}
</style><path class="ti3i2nqtt"/>`,
		"fallback": "fluent:arrow-swap-28-filled",
	});
}

export default Component;
