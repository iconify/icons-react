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
		"content": `<style>.gmtk10b7c {
  fill: currentColor;
  d: path("M17.134 10.134a1.25 1.25 0 0 0-1.768-1.768l-11 11a1.25 1.25 0 0 0 0 1.768l11 11a1.25 1.25 0 0 0 1.768-1.768L8.268 21.5H25.25c8.975 0 16.25 7.275 16.25 16.25a1.25 1.25 0 1 0 2.5 0C44 27.395 35.605 19 25.25 19H8.268z");
}
</style><path class="gmtk10b7c"/>`,
		"fallback": "fluent:arrow-reply-48-regular",
	});
}

export default Component;
