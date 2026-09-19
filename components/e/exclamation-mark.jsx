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
		"content": `<style>.x_h1v4jih {
  fill: currentColor;
  d: path("M36.989 42.439H27.01L23 2h18z");
}

.xu957cb6b {
  cx: 31.999px;
  cy: 54.354px;
  fill: currentColor;
  rx: 7.663px;
  ry: 7.646px;
}
</style><path class="x_h1v4jih"/><ellipse class="xu957cb6b"/>`,
		"fallback": "emojione-monotone:exclamation-mark",
	});
}

export default Component;
