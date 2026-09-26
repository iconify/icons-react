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
		"content": `<style>.ljndgibjs {
  fill: currentColor;
  d: path("M3 2L21 2C21.8451 2 22.3092 2.9833 21.7719 3.6357L15 11.8589L15 19C15 19.3788 14.786 19.725 14.4472 19.8944L10.4472 21.8944C9.7823 22.2269 9 21.7434 9 21L9 11.8589L2.2281 3.6357C1.6908 2.9833 2.1549 2 3 2Z");
}
</style><path class="ljndgibjs"/>`,
		"fallback": "keyline-icons:filter-sharp-fill",
	});
}

export default Component;
