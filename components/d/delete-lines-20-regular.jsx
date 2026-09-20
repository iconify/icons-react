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
		"content": `<style>.mlcvxacue {
  fill: currentColor;
  d: path("M11.5 4a1.5 1.5 0 0 0-3 0zm-4 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-.808 7H14.63l.808-7H4.561l1.18 10.23A2 2 0 0 0 7.728 17h2.357a1.5 1.5 0 0 0 0 1H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zm4 9a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="mlcvxacue"/>`,
		"fallback": "fluent:delete-lines-20-regular",
	});
}

export default Component;
