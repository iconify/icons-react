import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g916zjlyc {
  fill: currentColor;
  d: path("M3 11.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-10-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-10-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="g916zjlyc"/>`,
		"fallback": "fluent:grid-dots-16-filled",
	});
}

export default Component;
