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
		"content": `<style>.im1f2ukwa {
  fill: currentColor;
  d: path("m24.892 18.154l-5.921 10.18l5.921 10.179l5.923-10.179zm14.214 0l-5.922 10.18l5.922 10.179l5.923-10.179zM26.077 41.566L32 51.745l5.921-10.179L32 31.388z");
}

.x_qe1klbs {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M16.267 55.148V8.852C20.754 5.792 26.171 4 32 4s11.246 1.792 15.733 4.852v46.297C43.246 58.208 37.829 60 32 60s-11.246-1.792-15.733-4.852");
}
</style><path class="im1f2ukwa"/><path class="x_qe1klbs"/>`,
		"fallback": "emojione-monotone:flag-for-flag-st-vincent-and-grenadines",
	});
}

export default Component;
