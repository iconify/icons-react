import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_gfab3_h {
  fill: currentColor;
  d: path("M52.44 36A6 6 0 0 0 48 34a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a6 6 0 0 0 4.44-10Zm-6.18 11l31.81 35H46V48a2.06 2.06 0 0 1 .26-1M48 210a2 2 0 0 1-2-2V94h43l105.44 116ZM222 48v129.23a6 6 0 1 1-12 0V94h-75.12a6 6 0 0 1 0-12H210V48a2 2 0 0 0-2-2h-26v10a6 6 0 0 1-12 0V46H91.25a6 6 0 0 1 0-12H170V24a6 6 0 0 1 12 0v10h26a14 14 0 0 1 14 14");
}
</style><path class="a_gfab3_h"/>`,
		"fallback": "ph:calendar-slash-light",
	});
}

export default Component;
