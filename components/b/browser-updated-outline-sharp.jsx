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
		"content": `<style>.qp9zf-mfo {
  fill: currentColor;
  d: path("M7.192 20v-1.538l.77-.77H3V4h9.442v1H4v11.692h16V13h1v4.692h-4.962l.77.77V20zm8.52-5.712L11.423 10l.708-.708l3.08 3.094V4h1v8.387l3.081-3.095L20 10z");
}
</style><path class="qp9zf-mfo"/>`,
		"fallback": "material-symbols-light:browser-updated-outline-sharp",
	});
}

export default Component;
