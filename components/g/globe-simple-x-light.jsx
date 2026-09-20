import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vcby_x_-i {
  fill: currentColor;
  d: path("M220.24 172.24L200.49 192l19.75 19.76a6 6 0 1 1-8.48 8.48L192 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L183.51 192l-19.75-19.76a6 6 0 0 1 8.48-8.48L192 183.51l19.76-19.75a6 6 0 0 1 8.48 8.48M230 128a6 6 0 0 1-6 6H94.13a128.3 128.3 0 0 0 18.68 62.37c9.35 15.11 18.85 22.88 18.95 22.95A6 6 0 0 1 128 230a102 102 0 1 1 102-102m-86.54-88.67c11.95 14.44 28.89 41.9 30.43 82.67h43.91a90.19 90.19 0 0 0-74.34-82.67m-30.65 20.3A128.3 128.3 0 0 0 94.13 122h67.74a128.3 128.3 0 0 0-18.68-62.37A109.2 109.2 0 0 0 128 40.18a109.2 109.2 0 0 0-15.19 19.45M38.2 122h43.91c1.54-40.77 18.48-68.23 30.43-82.67A90.19 90.19 0 0 0 38.2 122m43.91 12H38.2a90.19 90.19 0 0 0 74.34 82.67c-11.95-14.44-28.89-41.9-30.43-82.67");
}
</style><path class="vcby_x_-i"/>`,
		"fallback": "ph:globe-simple-x-light",
	});
}

export default Component;
