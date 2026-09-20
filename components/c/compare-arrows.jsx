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
		"content": `<style>.zrjxtxb3i {
  fill: currentColor;
  d: path("m8 18.98l-.708-.713l3.095-3.094H3v-1h7.387l-3.095-3.094l.708-.713l4.308 4.307zm8-5.365l-4.308-4.307L16 5l.708.714l-3.094 3.094H21v1h-7.386l3.094 3.094z");
}
</style><path class="zrjxtxb3i"/>`,
		"fallback": "material-symbols-light:compare-arrows",
	});
}

export default Component;
