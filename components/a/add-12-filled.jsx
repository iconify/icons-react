import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q6z52n_kh {
  fill: currentColor;
  d: path("M6 1.75a.75.75 0 0 1 .75.75v2.75H9.5a.75.75 0 0 1 0 1.5H6.75V9.5a.75.75 0 0 1-1.5 0V6.75H2.5a.75.75 0 0 1 0-1.5h2.75V2.5A.75.75 0 0 1 6 1.75");
}
</style><path class="q6z52n_kh"/>`,
		"fallback": "fluent:add-12-filled",
	});
}

export default Component;
