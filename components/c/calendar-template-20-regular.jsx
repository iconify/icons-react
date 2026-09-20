import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kn-e1nfex {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2.035A3.5 3.5 0 0 0 15.5 7H15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2v.5q0 .255.035.5H5a3 3 0 0 1-3-3zm3.5 2h5c-.954 0-1.818.381-2.45 1H5.5a.5.5 0 0 1 0-1M5 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M10.5 8A2.5 2.5 0 0 0 8 10.5v5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 15.5 8zM9 10.5A1.5 1.5 0 0 1 10.5 9h5a1.5 1.5 0 0 1 1.5 1.5v.5H9zm0 5V12h8v3.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 9 15.5");
}
</style><path class="kn-e1nfex"/>`,
		"fallback": "fluent:calendar-template-20-regular",
	});
}

export default Component;
