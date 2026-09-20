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
		"content": `<style>.a9s93bb2s {
  fill: currentColor;
  d: path("M19 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M16 6a3 3 0 1 1 2.525 2.963l-2.038 3.358a3 3 0 0 1-4.75 3.65l-3.741 1.87Q8 17.919 8 18a3 3 0 1 1-.465-1.606l3.531-1.765a3 3 0 0 1 4.276-3.313l1.798-2.962A3 3 0 0 1 16 6m-2 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-9 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="a9s93bb2s"/>`,
		"fallback": "fluent:data-line-24-regular",
	});
}

export default Component;
