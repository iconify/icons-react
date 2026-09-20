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
		"content": `<style>.lhxy32tfz {
  fill: currentColor;
  d: path("M8.616 21q-.691 0-1.153-.462T7 19.385V4.615q0-.69.463-1.152T8.616 3h6.769q.69 0 1.153.463T17 4.616v14.769q0 .69-.462 1.153T15.385 21z");
}
</style><path class="lhxy32tfz"/>`,
		"fallback": "material-symbols-light:crop-2-3",
	});
}

export default Component;
