import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fm-r3tbnm {
  fill: var(--svg-color--eee, #eee);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z");
}

.zj3doobpn {
  cx: 18px;
  cy: 18px;
  r: 7px;
  fill: var(--svg-color--ed1b2f, #ed1b2f);
}
</style><path class="fm-r3tbnm"/><circle class="zj3doobpn"/>`,
		"fallback": "twemoji:flag-japan",
	});
}

export default Component;
