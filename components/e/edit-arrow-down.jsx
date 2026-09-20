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
		"content": `<style>.t2_4dzftz {
  fill: currentColor;
  d: path("M19.5 20L16 16.5l1.425-1.4l1.075 1.075V4h2v12.2l1.1-1.1l1.4 1.4zM3 18v-4.075l7.375-7.35q.6-.6 1.438-.575t1.412.625l1.2 1.25q.575.575.563 1.4t-.588 1.4L7.075 18zm8.725-7.475l1.25-1.275l-1.225-1.225l-1.275 1.25z");
}
</style><path class="t2_4dzftz"/>`,
		"fallback": "material-symbols:edit-arrow-down",
	});
}

export default Component;
