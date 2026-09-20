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
		"content": `<style>.hhmc_o5fe {
  fill: currentColor;
  d: path("M3.646 3.854a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708L7.793 8zM12 3.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0z");
}
</style><path class="hhmc_o5fe"/>`,
		"fallback": "fluent:arrow-next-16-regular",
	});
}

export default Component;
