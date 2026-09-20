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
		"content": `<style>.a3cypbbay {
  fill: currentColor;
  d: path("M15.192 19v-5.808H21V19zm-4-8.192V5H21v5.808zM3 19v-5.808h9.808V19zm0-8.192V5h5.808v5.808z");
}
</style><path class="a3cypbbay"/>`,
		"fallback": "material-symbols-light:dashboard-2-sharp",
	});
}

export default Component;
