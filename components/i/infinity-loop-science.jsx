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
		"content": `<style>.irimx1t2w {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.125 6.375q3.559 0 5.875 3.992q2.316-3.992 5.875-3.992q4.375 0 4.375 5.625t-4.375 5.625q-3.559 0-5.875-3.992q-2.316 3.992-5.875 3.992q-4.375 0-4.375-5.625t4.375-5.625M11.17 12Q9.157 7.875 6.125 7.875Q3.25 7.875 3.25 12t2.875 4.125q3.032 0 5.045-4.125m6.705 4.125q2.875 0 2.875-4.125t-2.875-4.125q-3.032 0-5.045 4.125q2.013 4.125 5.045 4.125");
}
</style><path class="irimx1t2w"/>`,
		"fallback": "uix-solid:infinity-loop-science",
	});
}

export default Component;
