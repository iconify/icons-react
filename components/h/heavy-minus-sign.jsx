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
		"content": `<style>.zjkn9acpk {
  fill: var(--svg-color--405866, #405866);
  d: path("M58.05 26.705H5.82c-7.75 0-7.75 12.02 0 12.02h52.23c7.752 0 7.752-12.02 0-12.02");
}
</style><path class="zjkn9acpk"/>`,
		"fallback": "emojione-v1:heavy-minus-sign",
	});
}

export default Component;
