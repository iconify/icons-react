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
		"content": `<style>.eccs3wb1i {
  cx: 18px;
  cy: 29px;
  r: 4px;
  fill: var(--svg-color--31373d, #31373d);
}

.etycyt-mg {
  cx: 18px;
  cy: 7px;
  r: 4px;
  fill: var(--svg-color--31373d, #31373d);
}

.r7ku0ubav {
  fill: var(--svg-color--31373d, #31373d);
  d: path("M34 18a3 3 0 0 1-3 3H5a3 3 0 1 1 0-6h26a3 3 0 0 1 3 3");
}
</style><path class="r7ku0ubav"/><circle class="etycyt-mg"/><circle class="eccs3wb1i"/>`,
		"fallback": "twemoji:divide",
	});
}

export default Component;
