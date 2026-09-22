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
		"content": `<style>.nsdc4kb_p {
  fill: currentColor;
  d: path("M4 20v-2.52L17.914 3.555l2.526 2.544L6.52 20zM17.504 7.589L19 6.111L17.889 5l-1.477 1.496zM9.896 20l1-1H21v1z");
}
</style><path class="nsdc4kb_p"/>`,
		"fallback": "material-symbols-light:edit-line-sharp",
	});
}

export default Component;
