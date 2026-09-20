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
		"content": `<style>.vydmcixst {
  fill: currentColor;
  d: path("M4 20V6.916L6.416 4h11.15L20 6.954V20zM5.38 6.808H18.6L17.077 5H6.904zM9 14.596l3-1.5l3 1.5V7.808H9z");
}
</style><path class="vydmcixst"/>`,
		"fallback": "material-symbols-light:box-sharp",
	});
}

export default Component;
