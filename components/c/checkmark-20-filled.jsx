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
		"content": `<style>.hayk-eb2p {
  fill: currentColor;
  d: path("m7.032 13.907l-3.471-3.905a.75.75 0 0 0-1.122.996l4 4.5a.75.75 0 0 0 1.091.032l10.5-10.5a.75.75 0 0 0-1.06-1.06z");
}
</style><path class="hayk-eb2p"/>`,
		"fallback": "fluent:checkmark-20-filled",
	});
}

export default Component;
