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
		"content": `<style>.uwwx15b7z {
  fill: currentColor;
  d: path("M3 2h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-9.586l-1.707-1.707a1 1 0 0 0-1.414 0L2 16.586V3a1 1 0 0 1 1-1m12 8a2 2 0 1 0 .001-3.999A2 2 0 0 0 15 10m-6 2.414l2.707 2.707a1 1 0 0 0 .293.203V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1.676a1 1 0 0 0 .293-.203Zm7.707 2.879L18 16.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L19.414 18l1.293 1.293a.999.999 0 1 1-1.414 1.414L18 19.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L16.586 18l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="uwwx15b7z"/>`,
		"fallback": "coolicons:image-close-corner-fill-sharp",
	});
}

export default Component;
