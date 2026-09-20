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
		"content": `<style>.jty3bjblr {
  fill: currentColor;
  d: path("M5 19V9q0-1.65 1.175-2.825T9 5h2v6H9v2h2v6zm8 0v-6h2v-2h-2V5h2q1.65 0 2.825 1.175T19 9v10zM2 17V7h2v10zm18 0V7h2v10z");
}
</style><path class="jty3bjblr"/>`,
		"fallback": "material-symbols:gate",
	});
}

export default Component;
