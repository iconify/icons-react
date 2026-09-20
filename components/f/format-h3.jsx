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
		"content": `<style>.i70hmpbqh {
  fill: currentColor;
  d: path("M4 16.5v-9h1v4h5v-4h1v9h-1v-4H5v4zm9 0v-1h5.385q.269 0 .442-.173t.173-.442V12.5h-4v-1h4V9.116q0-.27-.173-.443t-.442-.173H13v-1h5.385q.666 0 1.14.475T20 9.115v5.77q0 .666-.475 1.14t-1.14.475z");
}
</style><path class="i70hmpbqh"/>`,
		"fallback": "material-symbols-light:format-h3",
	});
}

export default Component;
