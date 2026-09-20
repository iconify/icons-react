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
		"content": `<style>.pczuwcbty {
  fill: currentColor;
  d: path("M4.5 20q-.213 0-.357-.143T4 19.5t.143-.357T4.5 19H6V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19h1.5q.214 0 .357.143T20 19.5t-.143.357T19.5 20zm10.27-7.46q.23-.23.23-.54t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23t.54-.23");
}
</style><path class="pczuwcbty"/>`,
		"fallback": "material-symbols-light:door-front-rounded",
	});
}

export default Component;
