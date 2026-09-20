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
		"content": `<style>.kwuk5fbma {
  fill: currentColor;
  d: path("M4 20V4h9.512q-.247.54-.36 1.12t-.113 1.169q0 2.442 1.759 4.115q1.76 1.673 4.202 1.538q.275-.019.516-.049q.24-.03.484-.108V20zm3.5-3.5h9.154l-2.827-3.77l-2.615 3.308l-1.75-2.115zm10.712-6.711V4.92l-2.1 2.056l-.689-.688L18.712 3L22 6.289l-.688.688l-2.1-2.056V9.79z");
}
</style><path class="kwuk5fbma"/>`,
		"fallback": "material-symbols-light:image-arrow-up-sharp",
	});
}

export default Component;
