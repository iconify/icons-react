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
		"content": `<style>.y_-ycebyf {
  fill: currentColor;
  d: path("M20 22V2h2v20zM2 22V2h2v20zm12-5V7h3v10zm-7 0V7h3v10z");
}
</style><path class="y_-ycebyf"/>`,
		"fallback": "material-symbols:align-justify-space-even-outline",
	});
}

export default Component;
