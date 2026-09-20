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
		"content": `<style>.epdy22_dh {
  fill: currentColor;
  d: path("M5 17.749v-3.766l4.06 2.653a5.38 5.38 0 0 0 5.88 0L19 13.983v3.766a.75.75 0 0 1-.15.45l-.001.002l-.001.001l-.003.004l-.009.01l-.012.016l-.013.017l-.086.101a5 5 0 0 1-.317.33c-.277.267-.69.614-1.25.958c-1.122.69-2.82 1.361-5.158 1.361s-4.036-.67-5.159-1.361a7.4 7.4 0 0 1-1.25-.957a5 5 0 0 1-.427-.464l-.009-.01l-.003-.005V18.2A.76.76 0 0 1 5 17.75m17.16-7.622l-8.04 5.253a3.88 3.88 0 0 1-4.24 0L3 10.885v5.364a.75.75 0 0 1-1.5 0v-6.25q0-.133.043-.25a.75.75 0 0 1 .302-.881l8.064-5.17a3.88 3.88 0 0 1 4.182 0l8.064 5.17a.75.75 0 0 1 .005 1.259");
}
</style><path class="epdy22_dh"/>`,
		"fallback": "fluent:hat-graduation-24-filled",
	});
}

export default Component;
