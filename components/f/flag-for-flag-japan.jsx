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
		"content": `<style>.exc8p7i9t {
  fill: var(--svg-color--eee, #EEE);
  d: path("M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z");
}

.mvrihjjev {
  fill: var(--svg-color--ed1b2f, #ED1B2F);
  cx: 18px;
  cy: 18px;
  r: 7px;
}
</style><path class="exc8p7i9t"/><circle class="mvrihjjev"/>`,
		"fallback": "twemoji:flag-for-flag-japan",
	});
}

export default Component;
