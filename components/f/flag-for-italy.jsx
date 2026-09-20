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
		"content": `<style>.is9vgxh9p {
  fill: var(--svg-color--009246, #009246);
  d: path("M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5z");
}

.xpy8sjkzl {
  fill: var(--svg-color--eee, #eee);
  d: path("M12 5h12v26H12z");
}

.yb5z19bsg {
  fill: var(--svg-color--ce2b37, #ce2b37);
  d: path("M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4z");
}
</style><path class="yb5z19bsg"/><path class="is9vgxh9p"/><path class="xpy8sjkzl"/>`,
		"fallback": "twemoji:flag-for-italy",
	});
}

export default Component;
