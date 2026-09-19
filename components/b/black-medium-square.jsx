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
		"content": `<style>.ry69nsbrv {
  fill: var(--svg-color--333, #333);
  d: path("M8 8h48v48H8z");
}
</style><path class="ry69nsbrv"/>`,
		"fallback": "emojione:black-medium-square",
	});
}

export default Component;
