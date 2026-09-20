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
		"content": `<style>.j5kpt0bgp {
  fill: currentColor;
  d: path("M2 14.962V9.789h1.692v5.173zm4.577 0V8.423h1.692v6.539zm4.577 0V7.654h1.692v7.308zm4.577 0V6.789h1.692v8.173zm4.577 0V5H22v9.962zM2 19v-2.577h1.692V19zm4.577 0v-2.577h1.692V19zm4.577 0v-2.577h1.692V19zm4.577 0v-2.577h1.692V19zm4.577 0v-2.577H22V19z");
}
</style><path class="j5kpt0bgp"/>`,
		"fallback": "material-symbols-light:android-cell-dual-5-bar-outline-sharp",
	});
}

export default Component;
