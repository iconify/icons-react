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
		"content": `<style>.g469cu25d {
  fill: currentColor;
  d: path("M1.77 19.462v-1h20.46v1zm1.23-2v-6.5h4.683l2 4h.623L13.95 8.49l1.252 2.47H21v6.5zm7.075-3.99l-1.764-3.51H3v-5.5h18v5.5h-5.183L14.337 7h-.662z");
}
</style><path class="g469cu25d"/>`,
		"fallback": "material-symbols-light:browse-activity-sharp",
	});
}

export default Component;
