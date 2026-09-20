import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t1ywl-bwc {
  fill: currentColor;
  d: path("m220.44 212l-160-176a6 6 0 0 0-8.88 8l72.32 79.55L60.4 171.2a6 6 0 0 0 7.2 9.6L122 140v84a6 6 0 0 0 9.6 4.8l52.28-39.21L211.56 220a6 6 0 0 0 8.88-8.08ZM134 212v-72l15.09 11.31l26.68 29.36ZM122 71.63V32a6 6 0 0 1 9.6-4.8l64 48a6 6 0 0 1 0 9.6L162.07 110a6 6 0 0 1-7.2-9.6L182 80l-48-36v27.63a6 6 0 0 1-12 0");
}
</style><path class="t1ywl-bwc"/>`,
		"fallback": "ph:bluetooth-slash-light",
	});
}

export default Component;
