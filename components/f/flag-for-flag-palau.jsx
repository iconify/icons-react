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
		"content": `<style>.re44mpbjz {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-7.867 45.733C15.446 47.733 8.4 40.687 8.4 32s7.046-15.733 15.732-15.733c8.688 0 15.734 7.047 15.734 15.733S32.82 47.733 24.133 47.733");
}
</style><path class="re44mpbjz"/>`,
		"fallback": "emojione-monotone:flag-for-flag-palau",
	});
}

export default Component;
