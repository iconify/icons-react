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
		"content": `<style>.i0hf5mbdn {
  fill: currentColor;
  d: path("m16.142 15.19l-1.14 1.18V2.5a.5.5 0 1 0-1 0v13.874l-1.142-1.183a.5.5 0 1 0-.72.694l1.821 1.886a.75.75 0 0 0 1.08 0l1.82-1.886a.5.5 0 1 0-.72-.694M5 17a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4.5a.5.5 0 1 1 0 1z");
}
</style><path class="i0hf5mbdn"/>`,
		"fallback": "fluent:arrow-autofit-down-20-regular",
	});
}

export default Component;
