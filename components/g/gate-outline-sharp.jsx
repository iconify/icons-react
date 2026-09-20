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
		"content": `<style>.jafur8bvs {
  fill: currentColor;
  d: path("M2 17V7h2v10zm3 2V9q0-1.65 1.175-2.825T9 5h6q1.65 0 2.825 1.175T19 9v10zm15-2V7h2v10zM7 17h4v-4H9v-2h2V7H9q-.825 0-1.412.588T7 9zm6 0h4V9q0-.825-.587-1.412T15 7h-2v4h2v2h-2z");
}
</style><path class="jafur8bvs"/>`,
		"fallback": "material-symbols:gate-outline-sharp",
	});
}

export default Component;
