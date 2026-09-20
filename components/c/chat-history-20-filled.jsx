import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ls65-7bma {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1-3.613 15.14l-.121-.065l-3.645.91a.5.5 0 0 1-.62-.441v-.082l.014-.083l.91-3.644l-.063-.12a8 8 0 0 1-.83-2.887l-.025-.382L2 10q.001-.823.16-1.599V8.4a.506.506 0 0 1 .615-.394c.307.08.413.394.353.671l-.012.049a7.04 7.04 0 0 0 .778 4.7a.5.5 0 0 1 .063.272l-.014.094l-.756 3.021l3.024-.754a.5.5 0 0 1 .188-.01l.091.021l.087.039A7 7 0 1 0 4.255 6H6.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v1.208A7.98 7.98 0 0 1 10 2M4.341 8A6 6 0 0 0 4 9.98l.006.279l.02.311a6 6 0 0 0 .612 2.126l.413.78l-.49 1.963l1.967-.49l.78.415a6 6 0 1 0-.64-10.355A1.5 1.5 0 0 1 6.5 8zM10 7.5V11h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0");
}
</style><path class="ls65-7bma"/>`,
		"fallback": "fluent:chat-history-20-filled",
	});
}

export default Component;
