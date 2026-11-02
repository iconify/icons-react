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
		"content": `<style>.bpq5plbkz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M9.293 18.707C8.98 18.395 8.468 18 8 18H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3a4.99 4.99 0 0 1 4 1.998A4.99 4.99 0 0 1 16 4h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3c-.468 0-.98.395-1.293.707l-2 2a1 1 0 0 1-1.414 0ZM11 15a1 1 0 0 0 2 0v-5a1 1 0 0 0-.133-.498l-.001-.002a1 1 0 0 0-1.731-.001l-.001.001A1 1 0 0 0 11 10Z");
}
</style><path class="bpq5plbkz"/>`,
		"fallback": "coolicons:book-open-bulk",
	});
}

export default Component;
