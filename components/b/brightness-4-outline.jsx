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
		"content": `<style>.u-0ri-bmh {
  fill: currentColor;
  d: path("M12.3 17q2.075 0 3.538-1.463T17.3 12t-1.463-3.537T12.3 7q-.55 0-1.075.113T10.2 7.45q1.35.625 2.138 1.85t.787 2.7t-.788 2.7t-2.137 1.85q.5.225 1.025.338T12.3 17m-.3 6.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65zm0-2.8l2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5L9.5 6H6v3.5L3.5 12L6 14.5V18h3.5zm0-8.5");
}
</style><path class="u-0ri-bmh"/>`,
		"fallback": "material-symbols:brightness-4-outline",
	});
}

export default Component;
