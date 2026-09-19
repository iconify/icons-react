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
		"content": `<style>.iblwdbb1h {
  fill: currentColor;
  d: path("M43.139 2a29.9 29.9 0 0 1 5.121 16.756c0 16.701-13.686 30.24-30.57 30.24a30.66 30.66 0 0 1-15.689-4.285C7.209 54.963 17.93 62 30.318 62C47.816 62 62 47.969 62 30.66C62 17.867 54.246 6.871 43.139 2");
}
</style><path class="iblwdbb1h"/>`,
		"fallback": "emojione-monotone:crescent-moon",
	});
}

export default Component;
