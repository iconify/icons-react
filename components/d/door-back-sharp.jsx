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
		"content": `<style>.n3-wyxb3m {
  fill: currentColor;
  d: path("M4 20v-1h2V4h12v15h2v1zm6.309-7.46q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23T9 12t.23.54t.54.23t.539-.23");
}
</style><path class="n3-wyxb3m"/>`,
		"fallback": "material-symbols-light:door-back-sharp",
	});
}

export default Component;
