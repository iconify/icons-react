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
		"content": `<style>.jd29l_tsz {
  fill: currentColor;
  d: path("M2 22v-4.65l8.75-11.8L9 3.2L10.6 2L12 3.875L13.4 2L15 3.2l-1.75 2.35L22 17.35V22zm6.225-2h7.55L12 14.725z");
}
</style><path class="jd29l_tsz"/>`,
		"fallback": "material-symbols:camping",
	});
}

export default Component;
