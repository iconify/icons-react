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
		"content": `<style>.ck9rdgb1g {
  fill: currentColor;
  d: path("M4 20v-5h1v4h4v1zm11 0v-1h4v-4h1v5zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5zm-9.835 5.836Q8 13.67 8 12t1.165-2.835T12 8t2.836 1.165T16 12t-1.164 2.836T12 16t-2.835-1.164m4.96-.711Q15 13.25 15 12t-.875-2.125T12 9t-2.125.875T9 12t.875 2.125T12 15t2.125-.875M12 12");
}
</style><path class="ck9rdgb1g"/>`,
		"fallback": "material-symbols-light:center-focus-strong-outline-sharp",
	});
}

export default Component;
