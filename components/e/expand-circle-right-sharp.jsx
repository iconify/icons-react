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
		"content": `<style>.x5xp1pb0k {
  fill: currentColor;
  d: path("m13.387 12l-3.075 3.075l.688.713L14.788 12L11 8.211l-.688.714zm-1.384 9q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709");
}
</style><path class="x5xp1pb0k"/>`,
		"fallback": "material-symbols-light:expand-circle-right-sharp",
	});
}

export default Component;
