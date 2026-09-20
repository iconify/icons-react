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
		"content": `<style>.g2fe91-ny {
  fill: currentColor;
  d: path("m9.723 8.4l4.162 4.156V9.619h1v4.65h-4.65v-1h2.961l-4.18-4.161zM18.577 19q-1.02 0-1.721-.702t-.702-1.721t.702-1.721t1.721-.702t1.721.702t.702 1.721t-.702 1.721t-1.721.702M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v5.115h-1V6.616q0-.27-.173-.443T19.385 6H4.615q-.269 0-.442.173T4 6.616v10.769q0 .269.173.442t.443.173h9.115v1z");
}
</style><path class="g2fe91-ny"/>`,
		"fallback": "material-symbols-light:bubbles-outline",
	});
}

export default Component;
