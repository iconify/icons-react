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
		"content": `<style>.pznt0ob-e {
  fill: currentColor;
  d: path("M1 17V7h6v10zm8 0V7h6v10zm8 0V7h6v10zM3 15h2V9H3zm16 0h2V9h-2z");
}
</style><path class="pznt0ob-e"/>`,
		"fallback": "material-symbols:flex-no-wrap",
	});
}

export default Component;
