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
		"content": `<style>.i_c22wbhm {
  fill: currentColor;
  d: path("M9.457 6.543a1 1 0 0 1 0 1.414L6.414 11h11.172l-3.043-3.043a1 1 0 0 1 1.414-1.414l4.75 4.75a1 1 0 0 1 0 1.414l-4.75 4.75a1 1 0 0 1-1.414-1.414L17.586 13H6.414l3.043 3.043a1 1 0 1 1-1.414 1.414l-4.75-4.75a1 1 0 0 1 0-1.414l4.75-4.75a1 1 0 0 1 1.414 0");
}
</style><path class="i_c22wbhm"/>`,
		"fallback": "fluent:arrow-bidirectional-left-right-24-filled",
	});
}

export default Component;
