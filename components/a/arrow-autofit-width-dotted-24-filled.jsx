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
		"content": `<style>.or6suplsc {
  fill: currentColor;
  d: path("M5.793 13.793a1 1 0 0 1 1.414 1.414L5.414 17l1.793 1.793a1 1 0 1 1-1.414 1.414l-2.5-2.5a1 1 0 0 1 0-1.414zm11 0a1 1 0 0 1 1.414 0l2.5 2.5l.068.076a1 1 0 0 1-.068 1.338l-2.5 2.5a1 1 0 0 1-1.414-1.414L18.586 17l-1.793-1.793a1 1 0 0 1 0-1.414M9 16a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2zm3 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2h-1a1 1 0 0 1 0-2zm1.5-12A2.5 2.5 0 0 1 20 6.5V11a1 1 0 1 1-2 0V6.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11a1 1 0 1 1-2 0V6.5A2.5 2.5 0 0 1 6.5 4z");
}
</style><path class="or6suplsc"/>`,
		"fallback": "fluent:arrow-autofit-width-dotted-24-filled",
	});
}

export default Component;
