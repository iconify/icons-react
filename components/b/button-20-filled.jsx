import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q7kf2pb9u {
  fill: currentColor;
  d: path("M2 8a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm7 1.5a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 0-1H9.5a.5.5 0 0 0-.5.5m-1 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0");
}
</style><path class="q7kf2pb9u"/>`,
		"fallback": "fluent:button-20-filled",
	});
}

export default Component;
