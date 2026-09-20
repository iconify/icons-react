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
		"content": `<style>.lfehxwgnq {
  fill: currentColor;
  d: path("M1.854 1.146a.5.5 0 1 0-.708.708L3.293 4H2a.5.5 0 0 0 0 1h2.293l2 2H2a.5.5 0 0 0 0 1h5.293l2.853 2.854a.5.5 0 0 0 .708-.708zM9.12 7l.988.988A.5.5 0 0 0 10 7zm-3-3l1 1H10a.5.5 0 0 0 0-1z");
}
</style><path class="lfehxwgnq"/>`,
		"fallback": "fluent:equal-off-12-regular",
	});
}

export default Component;
