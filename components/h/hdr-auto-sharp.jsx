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
		"content": `<style>.hrvknm11l {
  fill: currentColor;
  d: path("M7.63 16.654h1.016l1.038-2.839h4.632l1.038 2.839h1.015L12.54 6.346h-1zm2.374-3.708l1.985-5.28h.1l1.907 5.28zm2 8.054q-1.867 0-3.511-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709");
}
</style><path class="hrvknm11l"/>`,
		"fallback": "material-symbols-light:hdr-auto-sharp",
	});
}

export default Component;
