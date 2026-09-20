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
		"content": `<style>.h8duo8bsh {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-7.808h16V8.808H4z");
}
</style><path class="h8duo8bsh"/>`,
		"fallback": "material-symbols-light:credit-card-sharp",
	});
}

export default Component;
