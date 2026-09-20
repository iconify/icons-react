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
		"content": `<style>.v-yutzakj {
  fill: currentColor;
  d: path("m13.023 16.104l1.877-1.442l1.877 1.442l-.696-2.331l1.896-1.542h-2.33L14.9 9.95l-.746 2.28h-2.331l1.896 1.543zM3 19V5h6.596l2 2H21v12z");
}
</style><path class="v-yutzakj"/>`,
		"fallback": "material-symbols-light:folder-special-sharp",
	});
}

export default Component;
