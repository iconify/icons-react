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
		"content": `<style>.dn7v39b6n {
  fill: currentColor;
  d: path("M47 17H17C8.75 17 2 23.75 2 32s6.75 15 15 15h30c8.25 0 15-6.749 15-15c0-8.25-6.75-15-15-15M13.25 39.5a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m18.75 0a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m18.75 0a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15");
}
</style><path class="dn7v39b6n"/>`,
		"fallback": "emojione-monotone:horizontal-traffic-light",
	});
}

export default Component;
