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
		"content": `<style>.uamwjmobc {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-8h16V8H4z");
}
</style><path class="uamwjmobc"/>`,
		"fallback": "material-symbols:credit-card-sharp",
	});
}

export default Component;
