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
		"content": `<style>.nji08ztfs {
  fill: currentColor;
  d: path("m13.54 11.05l-3.538-3.539l.714-.688l2.825 2.825l5.675-5.65l.688.688zM3 21v-8.154h3V21zm11.616.808L7 19.583v-6.737h2.379l7.352 2.712v1.596h-3l-2.596-.925l-.312.752l2.87.942h7.923V19.5z");
}
</style><path class="nji08ztfs"/>`,
		"fallback": "material-symbols-light:approval-delegation-sharp",
	});
}

export default Component;
