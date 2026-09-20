import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wdw19bg_t {
  fill: currentColor;
  d: path("M11.456 6.356c1.2-1.82 3.882-1.792 5.044.054L20.017 12H25a1 1 0 0 1 0 2h-3.726l.131.209q.268.357.477.757l.021.034h-.005A5.5 5.5 0 1 1 17 12h.654l-2.846-4.525a1 1 0 0 0-1.682-.018L3.835 21.556a1 1 0 0 1-1.67-1.1zM17 14a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7");
}
</style><path class="wdw19bg_t"/>`,
		"fallback": "fluent:autocorrect-28-filled",
	});
}

export default Component;
