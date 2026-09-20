import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yzli95b7g {
  fill: currentColor;
  d: path("M9.5 1a.5.5 0 0 1 .5.5v17a.5.5 0 0 1-1 0v-17a.5.5 0 0 1 .5-.5");
}
</style><path class="yzli95b7g"/>`,
		"fallback": "fluent:divider-tall-20-regular",
	});
}

export default Component;
