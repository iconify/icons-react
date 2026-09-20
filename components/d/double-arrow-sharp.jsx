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
		"content": `<style>.cpnw74b8t {
  fill: currentColor;
  d: path("m6.05 19l5-7l-5-7H8.5l5 7l-5 7zM12 19l5-7l-5-7h2.45l5 7l-5 7z");
}
</style><path class="cpnw74b8t"/>`,
		"fallback": "material-symbols:double-arrow-sharp",
	});
}

export default Component;
