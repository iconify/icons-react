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
		"content": `<style>.iu36w2ond {
  fill: currentColor;
  d: path("M174.69 116.41A42 42 0 0 0 150 42.05V24a6 6 0 0 0-12 0v18h-20V24a6 6 0 0 0-12 0v18H72a6 6 0 0 0 0 12h10v140H72a6 6 0 0 0 0 12h34v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h10a46 46 0 0 0 14.69-89.59M178 84a30 30 0 0 1-30 30H94V54h54a30 30 0 0 1 30 30m-18 110H94v-68h66a34 34 0 0 1 0 68");
}
</style><path class="iu36w2ond"/>`,
		"fallback": "ph:currency-btc-light",
	});
}

export default Component;
