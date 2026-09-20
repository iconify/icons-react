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
		"content": `<style>.ppxkdxb4u {
  fill: currentColor;
  d: path("M9.808 13.692h.884v-3h4.193L13.615 9l1.27-1.692H9.808zM6 19.5V4h12v15.5l-6-2.583z");
}
</style><path class="ppxkdxb4u"/>`,
		"fallback": "material-symbols-light:bookmark-flag-sharp",
	});
}

export default Component;
