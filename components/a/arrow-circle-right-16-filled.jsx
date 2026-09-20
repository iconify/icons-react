import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.oo15_y4yy {
  fill: currentColor;
  d: path("M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m3.462-6.809a.5.5 0 0 1-.106.16l-.003.003l-2.5 2.5a.5.5 0 0 1-.707-.708L9.793 8.5H5a.5.5 0 0 1 0-1h4.793L8.146 5.854a.5.5 0 1 1 .708-.708l2.5 2.5l.002.003a.5.5 0 0 1 .106.542");
}
</style><path class="oo15_y4yy"/>`,
		"fallback": "fluent:arrow-circle-right-16-filled",
	});
}

export default Component;
