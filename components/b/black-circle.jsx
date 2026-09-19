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
		"content": `<style>.phm49tbyx {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--3e4347, #3e4347);
}
</style><circle class="phm49tbyx"/>`,
		"fallback": "emojione:black-circle",
	});
}

export default Component;
