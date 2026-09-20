import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.fno6byi7k {
  fill: currentColor;
  d: path("M8 2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 2m0 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-1a2 2 0 1 1 0-4a2 2 0 0 1 0 4m5.5-1.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM8 12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 8 12M3.5 8.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm.146-4.853a.5.5 0 0 1 .708 0l.5.5a.5.5 0 1 1-.708.707l-.5-.5a.5.5 0 0 1 0-.707m.708 8.707a.5.5 0 1 1-.708-.707l.5-.5a.5.5 0 1 1 .708.707zm8-8.707a.5.5 0 0 0-.708 0l-.5.5a.5.5 0 0 0 .708.707l.5-.5a.5.5 0 0 0 0-.707m-1.208 8.207l.5.5a.5.5 0 0 0 .708-.707l-.5-.5a.5.5 0 0 0-.708.707");
}
</style><path class="fno6byi7k"/>`,
		"fallback": "fluent:brightness-low-16-regular",
	});
}

export default Component;
