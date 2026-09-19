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
		"content": `<style>.zk9apvbek {
  fill: var(--svg-color--405866, #405866);
  d: path("M58.02 26.556H6.135c-7.699 0-7.699 11.94 0 11.94H58.02c7.701 0 7.701-11.94 0-11.94M34.899 6.203h-5.948c-7.699 0-7.699 13.12 0 13.12h5.948c7.701 0 7.701-13.12 0-13.12m.161 39.68h-5.949c-7.698 0-7.698 13.12 0 13.12h5.949c7.7 0 7.7-13.12 0-13.12");
}
</style><path class="zk9apvbek"/>`,
		"fallback": "emojione-v1:division-sign",
	});
}

export default Component;
