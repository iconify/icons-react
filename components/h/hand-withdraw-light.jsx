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
		"content": `<style>.j6_u2dbkz {
  fill: currentColor;
  d: path("M230 198.65V240a6 6 0 0 1-12 0v-41.35a76.83 76.83 0 0 0-28-59.08v62.74a6 6 0 0 1-11 3.28l-10.68-16.3a3 3 0 0 1-.17-.29a14 14 0 0 0-24.33 13.87L166 236.71a6 6 0 0 1-10 6.58l-22.26-34c-.06-.1-.12-.19-.17-.29A26 26 0 0 1 178 182.14V64a2 2 0 0 0-2-2h-16a6 6 0 0 1 0-12h16a14 14 0 0 1 14 14v60.69a88.88 88.88 0 0 1 40 73.96M86 56a6 6 0 0 0-6-6H64a14 14 0 0 0-14 14v136a6 6 0 0 0 12 0V64a2 2 0 0 1 2-2h16a6 6 0 0 0 6-6m70.24 43.76a6 6 0 0 0-8.48 0L126 121.51V16a6 6 0 0 0-12 0v105.51L92.24 99.76a6 6 0 0 0-8.48 8.48l32 32a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0 0-8.48");
}
</style><path class="j6_u2dbkz"/>`,
		"fallback": "ph:hand-withdraw-light",
	});
}

export default Component;
