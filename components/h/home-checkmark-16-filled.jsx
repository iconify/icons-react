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
		"content": `<style>.iosd3gbsr {
  fill: currentColor;
  d: path("M8.687 1.273a1 1 0 0 0-1.374 0L2.469 5.848c-.3.283-.469.677-.469 1.09V12.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.499V6.937c0-.412-.17-.806-.47-1.089zm2.167 5.38a.5.5 0 0 1 0 .707l-3.5 3.497a.5.5 0 0 1-.708 0l-1.5-1.499a.5.5 0 1 1 .708-.706L7 9.797l3.146-3.143a.5.5 0 0 1 .708 0");
}
</style><path class="iosd3gbsr"/>`,
		"fallback": "fluent:home-checkmark-16-filled",
	});
}

export default Component;
