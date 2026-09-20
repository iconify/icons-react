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
		"content": `<style>.swyx6siiw {
  fill: currentColor;
  d: path("M9 19q-2.925 0-4.962-2.037T2 12t2.038-4.962T9 5t4.963 2.038T16 12t-2.037 4.963T9 19m7-.1v-2q1.75-.35 2.875-1.725T20 12t-1.125-3.175T16 7.1v-2q2.6.35 4.3 2.312T22 12t-1.7 4.588T16 18.9");
}
</style><path class="swyx6siiw"/>`,
		"fallback": "material-symbols:fiber-smart-record-sharp",
	});
}

export default Component;
