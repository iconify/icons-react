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
		"content": `<style>.nzlakzbxv {
  fill: currentColor;
  d: path("M7.05 16.95Q5 14.9 5 12t2.05-4.95T12 5t4.95 2.05T19 12t-2.05 4.95T12 19t-4.95-2.05m8.488-1.412Q17 14.075 17 12t-1.463-3.537T12 7T8.463 8.463T7 12t1.463 3.538T12 17t3.538-1.463");
}
</style><path class="nzlakzbxv"/>`,
		"fallback": "material-symbols:fiber-manual-record-outline-rounded",
	});
}

export default Component;
