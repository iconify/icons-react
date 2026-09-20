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
		"content": `<style>.e_d7os7ji {
  fill: currentColor;
  d: path("M4 20v-1h2V5.616q0-.691.463-1.153T7.616 4h8.769q.69 0 1.153.463T18 5.616V19h2v1zm10.77-7.46q.23-.23.23-.54t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23t.54-.23");
}
</style><path class="e_d7os7ji"/>`,
		"fallback": "material-symbols-light:door-front",
	});
}

export default Component;
