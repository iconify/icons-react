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
		"content": `<style>.brj0uiqkr {
  fill: currentColor;
  d: path("M208 32H83.31A15.86 15.86 0 0 0 72 36.69L36.69 72A15.86 15.86 0 0 0 32 83.31V208a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M88 48h80v32H88Zm120 160H48V83.31l24-24V80a16 16 0 0 0 16 16h80a16 16 0 0 0 16-16V48h24Zm-80-96a40 40 0 1 0 40 40a40 40 0 0 0-40-40m0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24");
}
</style><path class="brj0uiqkr"/>`,
		"fallback": "ph:floppy-disk-back",
	});
}

export default Component;
