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
		"content": `<style>.jtjsf8bpi {
  fill: currentColor;
  d: path("M2 14C2 7.373 7.373 2 14 2s12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14m12.22-5.03a.75.75 0 0 0 0 1.06l3.22 3.22H8.75a.75.75 0 0 0 0 1.5h8.69l-3.22 3.22a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5a.75.75 0 0 0-1.06 0");
}
</style><path class="jtjsf8bpi"/>`,
		"fallback": "fluent:arrow-circle-right-28-filled",
	});
}

export default Component;
