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
		"content": `<style>.i29x1rjjt {
  fill: currentColor;
  d: path("m20 17.15l-1-1V5.616q0-.231-.192-.424T18.384 5H7.85l-1-1h11.535q.69 0 1.153.463T20 5.616zm.492 4.758L18.585 20H5.615q-.69 0-1.152-.462T4 18.384V5.416L2.092 3.508L2.8 2.8l18.4 18.4zM7.5 16.5l1.962-2.577l1.75 2.116l1.517-1.889L5 6.421v11.964q0 .23.192.423t.423.192H17.58l-2.5-2.5zm3.792-3.792");
}
</style><path class="i29x1rjjt"/>`,
		"fallback": "material-symbols-light:hide-image-outline",
	});
}

export default Component;
