import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.f3fxo95gg {
  cx: 17.999px;
  cy: 54.354px;
  fill: currentColor;
  rx: 7.663px;
  ry: 7.646px;
}

.ikm6qhd-m {
  fill: currentColor;
  d: path("M22.989 42.439H13.01L9 2h18z");
}

.j8re6-bct {
  cx: 45.999px;
  cy: 54.354px;
  fill: currentColor;
  rx: 7.663px;
  ry: 7.646px;
}

.u5j61ybjh {
  fill: currentColor;
  d: path("M50.989 42.439H41.01L37 2h18z");
}
</style><path class="ikm6qhd-m"/><ellipse class="f3fxo95gg"/><path class="u5j61ybjh"/><ellipse class="j8re6-bct"/>`,
		"fallback": "emojione-monotone:double-exclamation-mark",
	});
}

export default Component;
