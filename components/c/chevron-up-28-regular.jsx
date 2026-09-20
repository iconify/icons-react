import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lsy0k9k9k {
  fill: currentColor;
  d: path("M23.78 18.53a.75.75 0 0 1-1.06 0L14 9.81l-8.72 8.72a.75.75 0 0 1-1.06-1.06l9.25-9.25a.75.75 0 0 1 1.06 0l9.25 9.25a.75.75 0 0 1 0 1.06");
}
</style><path class="lsy0k9k9k"/>`,
		"fallback": "fluent:chevron-up-28-regular",
	});
}

export default Component;
