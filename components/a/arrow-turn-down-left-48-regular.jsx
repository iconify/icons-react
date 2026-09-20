import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qf6txdbub {
  fill: currentColor;
  d: path("M35.5 7.25a1.25 1.25 0 1 1 2.5 0v18.5A7.25 7.25 0 0 1 30.75 33H12.582l7.04 6.854a1.25 1.25 0 0 1-1.744 1.792l-9.5-9.25a1.25 1.25 0 0 1 0-1.792l9.5-9.25a1.25 1.25 0 0 1 1.744 1.792L12.069 30.5H30.75a4.75 4.75 0 0 0 4.75-4.75z");
}
</style><path class="qf6txdbub"/>`,
		"fallback": "fluent:arrow-turn-down-left-48-regular",
	});
}

export default Component;
