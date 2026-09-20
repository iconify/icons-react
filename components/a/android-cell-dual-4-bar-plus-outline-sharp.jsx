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
		"content": `<style>.vva726bwk {
  fill: currentColor;
  d: path("M2.866 14.962V9.923h1.692v5.039zm5.519 0V8.616h1.692v6.346zM2.865 19v-2.577h1.693V19zm5.52 0v-2.577h1.692V19zm11.038-7.379V5h1.693v6.906q-.38-.167-.81-.234t-.883-.05M13.903 19l-.018-2.577h.792q-.027.685.14 1.338q.168.653.53 1.239zm5.136 0v-2h-2v-1h2v-2h1v2h2v1h-2v2zm-5.135-4.038V6.789h1.692v6.886q-.202.298-.355.612q-.154.313-.26.674z");
}
</style><path class="vva726bwk"/>`,
		"fallback": "material-symbols-light:android-cell-dual-4-bar-plus-outline-sharp",
	});
}

export default Component;
