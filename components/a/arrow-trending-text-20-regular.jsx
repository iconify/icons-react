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
		"content": `<style>.tnexczbql {
  fill: currentColor;
  d: path("M17 3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h2.793L11 8.293L9.354 6.646a.5.5 0 0 0-.708 0l-5.5 5.5a.5.5 0 0 0 .708.708L9 7.707l1.646 1.647a.5.5 0 0 0 .707 0L16 4.707V7.5a.5.5 0 0 0 1 0zM10 13a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm6.5 3h-4a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1m-4-3a.5.5 0 1 0 0 1h4a.5.5 0 1 0 0-1z");
}
</style><path class="tnexczbql"/>`,
		"fallback": "fluent:arrow-trending-text-20-regular",
	});
}

export default Component;
