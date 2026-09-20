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
		"content": `<style>.lrz_m-l3j {
  fill: currentColor;
  d: path("M11.77 19q-.33 0-.55-.22t-.22-.55v-5.576L5.604 5.83q-.202-.27-.055-.55t.47-.28h11.962q.323 0 .47.28q.147.282-.055.55L13 12.655v5.577q0 .328-.22.549t-.55.22z");
}
</style><path class="lrz_m-l3j"/>`,
		"fallback": "material-symbols-light:filter-alt",
	});
}

export default Component;
