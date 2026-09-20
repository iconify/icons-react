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
		"content": `<style>.rm48uoqne {
  fill: currentColor;
  d: path("M12 23.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65zm3.538-7.762Q17 14.075 17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17t3.538-1.463m-5.663-1.412Q9 13.25 9 12t.875-2.125T12 9t2.125.875T15 12t-.875 2.125T12 15t-2.125-.875");
}
</style><path class="rm48uoqne"/>`,
		"fallback": "material-symbols:brightness-high",
	});
}

export default Component;
