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
		"content": `<style>.jyyc2jwxj {
  fill: currentColor;
  d: path("M2 12C2 8.134 6.4772 5 12 5C14.1338 5 16.1114 5.468 17.7351 6.265L12 12L6.2649 17.735C3.6859 16.469 2 14.372 2 12Z");
}

.nijv1bc_r {
  fill: currentColor;
  d: path("M22 12C22 15.866 17.5229 19 12 19C9.86629 19 7.88859 18.532 6.26489 17.735L12 12L17.7351 6.26501C20.3141 7.53101 22 9.62801 22 12Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="nijv1bc_r"/><path class="jyyc2jwxj"/>`,
		"fallback": "solar:ellipse-bold-duotone",
	});
}

export default Component;
