import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l_7v4wefl {
  fill: currentColor;
  d: path("M5 20v-4H3v-2h2v-2H3v-2h2V7l3-3l2 2l2.025-2l2 2l2-2l3 3v3H21v2h-1.975v2H21v2h-1.975v4zm2-10h2V7.825l-1-1l-1 1zm4 0h2V7.825l-1-1l-1 1zm4.025 0H17V7.825l-1-1l-.975.975zM7 14h2v-2H7zm4 0h2v-2h-2zm4.025 0H17v-2h-1.975zM7 18h2v-2H7zm4 0h2v-2h-2zm4.025 0H17v-2h-1.975z");
}
</style><path class="l_7v4wefl"/>`,
		"fallback": "material-symbols:fence",
	});
}

export default Component;
