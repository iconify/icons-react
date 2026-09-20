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
		"content": `<style>.qbbfu-92e {
  fill: currentColor;
  d: path("M12 22L6 12l6-10l6 10z");
}
</style><path class="qbbfu-92e"/>`,
		"fallback": "material-symbols:hov-sharp",
	});
}

export default Component;
