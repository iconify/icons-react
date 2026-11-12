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
		"content": `<style>.d-k2c06yk {
  fill: currentColor;
  d: path("M18 8V6h-4V4h6v4zM2 10V4h6v2H4v4zm0 10v-6h2v4h4v2zm10 0v-1.4q0-.6.313-1.112t.887-.738q.9-.375 1.863-.562T17 16t1.938.188t1.862.562q.575.225.888.738T22 18.6V20zm3.225-5.725Q14.5 13.55 14.5 12.5t.725-1.775T17 10t1.775.725t.725 1.775t-.725 1.775T17 15t-1.775-.725");
}
</style><path class="d-k2c06yk"/>`,
		"fallback": "material-symbols:frame-person-2-sharp",
	});
}

export default Component;
