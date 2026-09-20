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
		"content": `<style>.qj_5nenue {
  fill: currentColor;
  d: path("M5 13h11.5a.5.5 0 0 0 .416-.777L14.101 8l2.815-4.223A.5.5 0 0 0 16.5 3h-12a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0zm0-1V4h10.566l-2.482 3.723a.5.5 0 0 0 0 .554L15.566 12z");
}
</style><path class="qj_5nenue"/>`,
		"fallback": "fluent:flag-20-regular",
	});
}

export default Component;
