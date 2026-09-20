import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.i-68b-9_j {
  fill: currentColor;
  d: path("m17.077 4.217l-14.93 14.93a.5.5 0 0 0 .707.708l14.93-14.93a6.57 6.57 0 1 1 9.292 9.292L13.287 28.006a3.39 3.39 0 1 1-4.793-4.793l11.86-11.86a.5.5 0 0 0-.708-.707L7.787 22.506a4.39 4.39 0 0 0 6.207 6.207l13.79-13.788A7.57 7.57 0 1 0 17.076 4.217");
}
</style><path class="i-68b-9_j"/>`,
		"fallback": "fluent:attach-32-light",
	});
}

export default Component;
