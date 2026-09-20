import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c1epeyjwq {
  fill: currentColor;
  d: path("M6 10.5a.75.75 0 0 0 .75-.75V3.81l1.97 1.97a.75.75 0 0 0 1.06-1.06L6.53 1.47a.75.75 0 0 0-1.06 0L2.22 4.72a.75.75 0 1 0 1.06 1.06l1.97-1.97v5.94c0 .414.336.75.75.75");
}
</style><path class="c1epeyjwq"/>`,
		"fallback": "fluent:arrow-up-12-filled",
	});
}

export default Component;
