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
		"content": `<style>.c3mjccbqa {
  fill: currentColor;
  d: path("M12 14.702L6.692 9.394l.708-.707l4.6 4.6l4.6-4.6l.708.707z");
}
</style><path class="c3mjccbqa"/>`,
		"fallback": "material-symbols-light:expand-more",
	});
}

export default Component;
