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
		"content": `<style>.ngm2qlbef {
  fill: currentColor;
  d: path("M17.6 18L8 8.4V17H6V5h12v2H9.4l9.6 9.6z");
}
</style><path class="ngm2qlbef"/>`,
		"fallback": "material-symbols:arrow-insert-outline",
	});
}

export default Component;
