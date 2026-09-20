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
		"content": `<style>.s8sx0o8vi {
  fill: currentColor;
  d: path("M188 92a23.9 23.9 0 0 0-16 6.13V60a24 24 0 0 0-40.07-17.8A24 24 0 0 0 84 44v14.13A24 24 0 0 0 44 76v76a84 84 0 0 0 168 0v-36a24 24 0 0 0-24-24m16 60a76 76 0 0 1-152 0V76a16 16 0 0 1 32 0v44a4 4 0 0 0 8 0V44a16 16 0 0 1 32 0v68a4 4 0 0 0 8 0V60a16 16 0 0 1 32 0v72.18A44.06 44.06 0 0 0 124 176a4 4 0 0 0 8 0a36 36 0 0 1 36-36a4 4 0 0 0 4-4v-20a16 16 0 0 1 32 0Z");
}
</style><path class="s8sx0o8vi"/>`,
		"fallback": "ph:hand-palm-thin",
	});
}

export default Component;
