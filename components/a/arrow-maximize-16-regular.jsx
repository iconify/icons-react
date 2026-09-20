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
		"content": `<style>.lp_q-_0os {
  fill: currentColor;
  d: path("M12.4 3a.6.6 0 0 1 .6.6v4.9a.5.5 0 0 1-1 0V4.707L4.707 12H8.5a.5.5 0 0 1 0 1H3.6a.6.6 0 0 1-.6-.6V7.5a.5.5 0 0 1 1 0v3.793L11.293 4H7.5a.5.5 0 0 1 0-1z");
}
</style><path class="lp_q-_0os"/>`,
		"fallback": "fluent:arrow-maximize-16-regular",
	});
}

export default Component;
