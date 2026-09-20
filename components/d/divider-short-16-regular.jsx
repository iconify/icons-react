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
		"content": `<style>.yhihwcb_f {
  fill: currentColor;
  d: path("M7.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5");
}
</style><path class="yhihwcb_f"/>`,
		"fallback": "fluent:divider-short-16-regular",
	});
}

export default Component;
