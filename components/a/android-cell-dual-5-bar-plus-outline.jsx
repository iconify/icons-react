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
		"content": `<style>.nxrhrmb0l {
  fill: currentColor;
  d: path("M2 14.962V9.789h1.692v5.173zm4.577 0V8.423h1.692v6.539zm4.577 0V7.654h1.692v7.308zM2 19v-2.577h1.692V19zm4.577 0v-2.577h1.692V19zm4.577 0v-2.577h1.692V19zm9.154-7.308V5H22v7.289q-.375-.245-.801-.392t-.891-.205m-2.885.421q-.425.212-.817.493t-.702.644h-.173V6.789h1.692zM19.039 19v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="nxrhrmb0l"/>`,
		"fallback": "material-symbols-light:android-cell-dual-5-bar-plus-outline",
	});
}

export default Component;
