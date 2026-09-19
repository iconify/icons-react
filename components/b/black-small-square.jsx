import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ddovr0uap {
  fill: var(--svg-color--333, #333);
  d: path("M16 16h32v32H16z");
}
</style><path class="ddovr0uap"/>`,
		"fallback": "emojione:black-small-square",
	});
}

export default Component;
