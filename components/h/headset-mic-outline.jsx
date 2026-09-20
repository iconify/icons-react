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
		"content": `<style>.c74fxkbuc {
  fill: currentColor;
  d: path("M12 23v-2h7v-1h-4v-8h4v-1q0-2.9-2.05-4.95T12 4T7.05 6.05T5 11v1h4v8H5q-.825 0-1.412-.587T3 18v-7q0-1.85.713-3.488T5.65 4.65t2.863-1.937T12 2t3.488.713T18.35 4.65t1.938 2.863T21 11v10q0 .825-.587 1.413T19 23zm-7-5h2v-4H5zm12 0h2v-4h-2zM5 14h2zm12 0h2z");
}
</style><path class="c74fxkbuc"/>`,
		"fallback": "material-symbols:headset-mic-outline",
	});
}

export default Component;
