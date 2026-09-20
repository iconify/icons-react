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
		"content": `<style>.r7_9nljla {
  fill: currentColor;
  d: path("M10 12.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.763.763 0 0 1-.75-.75M12 16v-.75c0-.258-.04-.511-.115-.75h4.365a.75.75 0 0 1 0 1.5zm0 3v-1.5h4.25a.75.75 0 0 1 0 1.5zm-6.5-7.95q-.32.066-.618.214l-.882.44V4a2 2 0 0 1 2-2h6.172c.515 0 1.047.22 1.413.586l5.829 5.828A2 2 0 0 1 20 9.828V20a2 2 0 0 1-2 2h-7.404l.022-.011a2.5 2.5 0 0 0 1.268-1.489H18a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5zM17.378 8.5L13.5 4.621V8a.5.5 0 0 0 .5.5zm-7.207 5.408l-3.5-1.75a1.5 1.5 0 0 0-1.342 0l-3.5 1.75A1.5 1.5 0 0 0 1 15.25v4.503a1.5 1.5 0 0 0 .83 1.342l3.5 1.75a1.5 1.5 0 0 0 1.34 0l3.5-1.75a1.5 1.5 0 0 0 .83-1.342V15.25a1.5 1.5 0 0 0-.83-1.342m-7.618 1.368a.5.5 0 0 1 .67-.223L6 16.44l2.776-1.388a.5.5 0 1 1 .448.894L6.5 17.31v3.19a.5.5 0 1 1-1 0v-3.19l-2.724-1.363a.5.5 0 0 1-.223-.67");
}
</style><path class="r7_9nljla"/>`,
		"fallback": "fluent:document-bullet-list-cube-24-regular",
	});
}

export default Component;
