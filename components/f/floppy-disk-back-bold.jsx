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
		"content": `<style>.f4b8lbbtu {
  fill: currentColor;
  d: path("M208 28H83.31a19.86 19.86 0 0 0-14.14 5.86L33.86 69.17A19.86 19.86 0 0 0 28 83.31V208a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20M92 52h72v20H92Zm112 152H52V85l16-16v7a20 20 0 0 0 20 20h80a20 20 0 0 0 20-20V52h16Zm-76-96a42 42 0 1 0 42 42a42 42 0 0 0-42-42m0 60a18 18 0 1 1 18-18a18 18 0 0 1-18 18");
}
</style><path class="f4b8lbbtu"/>`,
		"fallback": "ph:floppy-disk-back-bold",
	});
}

export default Component;
