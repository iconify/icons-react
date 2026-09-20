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
		"content": `<style>.myybkab2d {
  fill: currentColor;
  d: path("M6.5 19q-1.871 0-3.185-1.306Q2 16.39 2 14.517q0-1.719 1.175-3.051t2.921-1.431q.325-2.083 1.83-3.458t3.574-1.56v8.325l-2.061-2.05L8.73 12L12 15.27L15.27 12l-.708-.708l-2.062 2.05V5.017q2.325.273 3.912 1.947T18 11v1h.616q1.436.046 2.41 1.055T22 15.5q0 1.471-1.014 2.486Q19.97 19 18.5 19z");
}
</style><path class="myybkab2d"/>`,
		"fallback": "material-symbols-light:cloud-download-sharp",
	});
}

export default Component;
