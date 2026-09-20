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
		"content": `<style>.zd661e5mk {
  fill: currentColor;
  d: path("M7.885 21V4.48h2.423V3h3.384v1.48h2.424v8.259q-.281.092-.522.214q-.24.122-.478.274V5.462H8.885V20h3.738q.068.28.18.521q.113.24.245.479zm8.227 0l-.689-.688l2.1-2.1l-2.1-2.1l.689-.689l2.1 2.1l2.1-2.1l.688.689l-2.075 2.1l2.075 2.1l-.688.688l-2.1-2.075z");
}
</style><path class="zd661e5mk"/>`,
		"fallback": "material-symbols-light:battery-error-outline-sharp",
	});
}

export default Component;
