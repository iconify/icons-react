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
		"content": `<style>.bwvsu578c {
  fill: currentColor;
  d: path("M11 6A5 5 0 1 1 1 6a5 5 0 0 1 10 0m-5.5.5V8a.5.5 0 0 0 1 0V6.5a.5.5 0 0 0-1 0M6 3.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="bwvsu578c"/>`,
		"fallback": "fluent:info-12-filled",
	});
}

export default Component;
