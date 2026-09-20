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
		"content": `<style>.nm8i13gdk {
  fill: currentColor;
  d: path("M2 19v-4.712h1.692V19zm4.577 0v-6.577h1.692V19zm4.577 0V9.654h1.692V19zm4.577 0V7.789h1.692V19zm4.577 0V5H22v14z");
}
</style><path class="nm8i13gdk"/>`,
		"fallback": "material-symbols-light:android-cell-5-bar",
	});
}

export default Component;
