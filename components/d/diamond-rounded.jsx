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
		"content": `<style>.k4uzmj49i {
  fill: currentColor;
  d: path("M9.2 8.25h5.6L12.15 3h-.3zm2.05 11.85V9.75H2.625zm1.5 0l8.625-10.35H12.75zm3.7-11.85h5.175L19.55 4.1q-.275-.5-.737-.8T17.775 3H13.85zm-14.075 0H7.55L10.15 3H6.225q-.575 0-1.037.3t-.738.8z");
}
</style><path class="k4uzmj49i"/>`,
		"fallback": "material-symbols:diamond-rounded",
	});
}

export default Component;
