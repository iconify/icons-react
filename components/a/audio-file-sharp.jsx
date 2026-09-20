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
		"content": `<style>.vjocmaczq {
  fill: currentColor;
  d: path("M10.747 18.692q.819 0 1.382-.56q.563-.562.563-1.382v-3.98h2.731v-1.54h-3.5v4.087q-.236-.257-.53-.383q-.293-.126-.643-.126q-.82 0-1.381.56t-.561 1.379t.56 1.382t1.379.563M5 21V3h9.5L19 7.5V21zm9-13h4l-4-4z");
}
</style><path class="vjocmaczq"/>`,
		"fallback": "material-symbols-light:audio-file-sharp",
	});
}

export default Component;
