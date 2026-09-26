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
		"content": `<style>.r07pcme2w {
  fill: currentColor;
  d: path("M2.2929 11.2929L12.2929 1.2929C12.5789 1.0069 13.009 0.9213 13.3827 1.0761C13.7564 1.2309 14 1.5955 14 2L14 6L21 6C21.5523 6 22 6.4477 22 7L22 17C22 17.5523 21.5523 18 21 18L14 18L14 22C14 22.4045 13.7564 22.7691 13.3827 22.9239C13.009 23.0787 12.5789 22.9931 12.2929 22.7071L2.2929 12.7071C1.9024 12.3166 1.9024 11.6834 2.2929 11.2929Z");
}
</style><path class="r07pcme2w"/>`,
		"fallback": "keyline-icons:arrow-big-left-short-sharp-fill",
	});
}

export default Component;
