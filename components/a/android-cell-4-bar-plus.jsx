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
		"content": `<style>.thglxrblq {
  fill: currentColor;
  d: path("M2.866 19v-6.577h1.692V19zm5.519 0v-8.884h1.692V19zm11.038-7.379V5h1.693v6.906q-.387-.17-.813-.236t-.88-.049M13.903 19V7.789h1.693v5.886q-.43.598-.686 1.312q-.256.713-.256 1.513q0 .699.186 1.325q.185.627.506 1.175zm5.136 0v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="thglxrblq"/>`,
		"fallback": "material-symbols-light:android-cell-4-bar-plus",
	});
}

export default Component;
