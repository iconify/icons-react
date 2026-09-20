import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vktafcbix {
  fill: currentColor;
  d: path("M26.113 4.116a1.25 1.25 0 0 1 1.768 1.768L17.766 15.999l10.115 10.114a1.25 1.25 0 1 1-1.768 1.768L16 17.766L5.884 27.881a1.25 1.25 0 1 1-1.768-1.768L14.231 16L4.116 5.884a1.25 1.25 0 1 1 1.768-1.768l10.115 10.115z");
}
</style><path class="vktafcbix"/>`,
		"fallback": "fluent:dismiss-32-filled",
	});
}

export default Component;
