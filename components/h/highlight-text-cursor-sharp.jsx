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
		"content": `<style>.tjv71abxw {
  fill: currentColor;
  d: path("M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709m-2.887-4.538h5.769v-1H12.5V8.154h2.385v-1h-5.77v1H11.5v7.308H9.116z");
}
</style><path class="tjv71abxw"/>`,
		"fallback": "material-symbols-light:highlight-text-cursor-sharp",
	});
}

export default Component;
