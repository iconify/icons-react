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
		"content": `<style>.w6ocgvbay {
  fill: currentColor;
  d: path("M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m4.646-.854a.5.5 0 1 0 .708.708L9.5 7.707V13.5a.5.5 0 0 0 1 0V7.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0z");
}
</style><path class="w6ocgvbay"/>`,
		"fallback": "fluent:arrow-circle-up-20-filled",
	});
}

export default Component;
