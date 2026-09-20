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
		"content": `<style>.lrhxrxcti {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5.793l-1.646 1.647a.5.5 0 0 1-.708 0L5 12.207a.5.5 0 1 1 .707-.707l.793.793V6.5a.5.5 0 0 1 1 0v5.793l.793-.793a.5.5 0 1 1 .707.707m6-4.414a.5.5 0 0 1-.707.707l-.793-.793V13.5a.5.5 0 0 1-1 0V7.707l-.793.793A.5.5 0 1 1 11 7.793l1.646-1.647a.5.5 0 0 1 .707 0z");
}
</style><path class="lrhxrxcti"/>`,
		"fallback": "fluent:arrow-circle-down-up-20-filled",
	});
}

export default Component;
