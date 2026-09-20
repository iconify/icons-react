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
		"content": `<style>.lnuhxbb1e {
  fill: currentColor;
  d: path("M14.5 3v1H14a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-.5V3a2 2 0 1 0-4 0m1 1V3a1 1 0 1 1 2 0v1zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M12 9V6h-1.5v12H16a2 2 0 0 0 2-2v-5h-4a2 2 0 0 1-2-2M4 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5V6zm2 9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m6 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5");
}
</style><path class="lnuhxbb1e"/>`,
		"fallback": "fluent:dual-screen-lock-20-filled",
	});
}

export default Component;
