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
		"content": `<style>.tmin4jbct {
  fill: currentColor;
  d: path("M2 17V7h20v10zm2-2h16V9H4zm0 0V9z");
}
</style><path class="tmin4jbct"/>`,
		"fallback": "material-symbols:crop-21-9-outline-sharp",
	});
}

export default Component;
