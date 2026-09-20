import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yu6cuhbvk {
  fill: currentColor;
  d: path("M4.5 2a.5.5 0 1 1 0 1h-.715L2.002 6l1.637 2.756A.5.5 0 0 0 4.07 9h.177a.5.5 0 0 0 .48-.362l1.586-5.55A1.5 1.5 0 0 1 7.755 2h.176a1.5 1.5 0 0 1 1.29.733l1.637 2.756a1 1 0 0 1 0 1.022l-1.783 3a1 1 0 0 1-.86.489H7.5a.5.5 0 0 1 0-1h.716l1.783-3L8.36 3.244A.5.5 0 0 0 7.931 3h-.176a.5.5 0 0 0-.482.362l-1.585 5.55A1.5 1.5 0 0 1 4.246 10h-.177a1.5 1.5 0 0 1-1.289-.733L1.142 6.51a1 1 0 0 1 0-1.022l1.783-3a1 1 0 0 1 .86-.489z");
}
</style><path class="yu6cuhbvk"/>`,
		"fallback": "fluent:agents-12-regular",
	});
}

export default Component;
