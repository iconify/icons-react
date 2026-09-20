import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.getmkni_y {
  fill: currentColor;
  d: path("M1.146 10.854a.5.5 0 0 1 0-.708L9.293 2H4.47a.5.5 0 0 1 0-1h6.03a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V2.707l-8.146 8.147a.5.5 0 0 1-.708 0");
}
</style><path class="getmkni_y"/>`,
		"fallback": "fluent:arrow-up-right-12-regular",
	});
}

export default Component;
