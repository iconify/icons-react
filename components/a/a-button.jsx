import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n0ety7t8h {
  fill: currentColor;
  d: path("M28.271 30h7.459l-3.729-9.938z");
}

.nkpvjgn8z {
  fill: currentColor;
  d: path("M52 2H12C6.477 2 2 6.476 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.524-4.477-10-10-10M41.733 46l-4.202-11.199h-11.06L22.267 46H17l12.01-32h5.982L47 46z");
}
</style><path class="n0ety7t8h"/><path class="nkpvjgn8z"/>`,
		"fallback": "emojione-monotone:a-button",
	});
}

export default Component;
