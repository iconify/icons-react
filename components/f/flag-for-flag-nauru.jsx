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
		"content": `<style>.j06jhsb1v {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m28 30c0 1.336-.1 2.647-.281 3.934H4.281C4.1 34.647 4 33.336 4 32s.1-2.647.281-3.934h55.438C59.9 29.353 60 30.664 60 32M10.367 43.609l2.427-.265l-1.528-1.903l2.343.682l-.684-2.343l1.903 1.528l.266-2.426l1.173 2.14l1.174-2.14l.265 2.426l1.903-1.528l-.686 2.343l2.343-.682l-1.526 1.903l2.428.265l-2.142 1.174l2.142 1.172l-2.428.265l1.526 1.905l-2.343-.686l.686 2.345l-1.903-1.528l-.265 2.428l-1.174-2.142l-1.173 2.142l-.266-2.428l-1.903 1.528l.684-2.345l-2.343.686l1.528-1.905l-2.427-.265l2.141-1.172z");
}
</style><path class="j06jhsb1v"/>`,
		"fallback": "emojione-monotone:flag-for-flag-nauru",
	});
}

export default Component;
