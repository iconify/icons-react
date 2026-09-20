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
		"content": `<style>.ohk9dkb-k {
  fill: currentColor;
  d: path("M8 11.5h8l-4-4zM5 14h14V5H5zm-2 7V3h18v18z");
}
</style><path class="ohk9dkb-k"/>`,
		"fallback": "material-symbols:bottom-panel-open-sharp",
	});
}

export default Component;
