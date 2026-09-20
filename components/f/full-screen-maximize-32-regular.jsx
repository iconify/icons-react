import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lnv5o7btm {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h4.25a1 1 0 1 1 0 2H6.25C5.56 5 5 5.56 5 6.25v4.25a1 1 0 1 1-2 0zM20.5 4a1 1 0 0 1 1-1h4.25A3.25 3.25 0 0 1 29 6.25v4.25a1 1 0 1 1-2 0V6.25C27 5.56 26.44 5 25.75 5H21.5a1 1 0 0 1-1-1M4 20.5a1 1 0 0 1 1 1v4.25c0 .69.56 1.25 1.25 1.25h4.25a1 1 0 1 1 0 2H6.25A3.25 3.25 0 0 1 3 25.75V21.5a1 1 0 0 1 1-1m24 0a1 1 0 0 1 1 1v4.25A3.25 3.25 0 0 1 25.75 29H21.5a1 1 0 1 1 0-2h4.25c.69 0 1.25-.56 1.25-1.25V21.5a1 1 0 0 1 1-1");
}
</style><path class="lnv5o7btm"/>`,
		"fallback": "fluent:full-screen-maximize-32-regular",
	});
}

export default Component;
