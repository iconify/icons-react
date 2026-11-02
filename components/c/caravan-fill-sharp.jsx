import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f54jenbmy {
  fill: currentColor;
  d: path("M2 18V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9h3a1 1 0 0 1 0 2h-3v2a1 1 0 0 1-1 1h-4.171a3 3 0 0 1-5.658 0H3a1 1 0 0 1-1-1M6 8v6h8V8Zm3.293 10.707l.002.002a1 1 0 0 0 1.41 0l.002-.002l.002-.002a1 1 0 0 0-.002-1.412l-.002-.002a1 1 0 0 0-1.41 0l-.002.002l-.002.002a1 1 0 0 0 .002 1.412");
}
</style><path class="f54jenbmy"/>`,
		"fallback": "coolicons:caravan-fill-sharp",
	});
}

export default Component;
