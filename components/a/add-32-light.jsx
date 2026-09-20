import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rlwbb2btz {
  fill: currentColor;
  d: path("M16.5 3.5a.5.5 0 0 0-1 0v12h-12a.5.5 0 0 0 0 1h12v12a.5.5 0 0 0 1 0v-12h12a.5.5 0 0 0 0-1h-12z");
}
</style><path class="rlwbb2btz"/>`,
		"fallback": "fluent:add-32-light",
	});
}

export default Component;
