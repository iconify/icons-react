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
		"content": `<style>.uuxp37epe {
  fill: currentColor;
  d: path("M2.786 8.107C4.936 3.02 10.804.639 15.892 2.788s7.469 8.016 5.32 13.104s-8.016 7.469-13.104 5.32S.637 13.195 2.786 8.107M10 8a2 2 0 1 0 3.999.001A2 2 0 0 0 10 8m7 3H7a1 1 0 0 0 0 2h4v.586l-2.707 2.707a.999.999 0 1 0 1.414 1.414L12 15.414l2.293 2.293a.999.999 0 1 0 1.414-1.414L13 13.586V13h4a1 1 0 0 0 0-2");
}
</style><path class="uuxp37epe"/>`,
		"fallback": "coolicons:accessibility-fill-sharp",
	});
}

export default Component;
