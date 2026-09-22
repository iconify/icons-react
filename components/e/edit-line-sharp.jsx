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
		"content": `<style>.j_fmrzbmy {
  fill: currentColor;
  d: path("M3 21v-4.25l14.625-14.6l4.2 4.275L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4zM10.05 21l2-2H22v2z");
}
</style><path class="j_fmrzbmy"/>`,
		"fallback": "material-symbols:edit-line-sharp",
	});
}

export default Component;
