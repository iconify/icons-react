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
		"content": `<style>.xm-dhjbqi {
  fill: currentColor;
  d: path("m2.051 17.684l4-12a1 1 0 0 1 1.898 0l4 12a1.001 1.001 0 0 1-1.898.632L8.946 15H5.054l-1.105 3.316a1.001 1.001 0 0 1-1.898-.632M7 9.162L5.721 13h2.558Zm13.089 2.426A1 1 0 0 1 22 12v6a1 1 0 0 1-1.911.412a4.002 4.002 0 0 1-5.132-6.009a4 4 0 0 1 5.132-.815m-.246 2.634a2 2 0 1 0-3.686 1.556a2 2 0 0 0 3.686-1.556");
}
</style><path class="xm-dhjbqi"/>`,
		"fallback": "coolicons:case-sensitive-fill",
	});
}

export default Component;
