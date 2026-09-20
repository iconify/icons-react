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
		"content": `<style>.musdqpbsn {
  fill: currentColor;
  d: path("M5.5 15v-4.5H4V9h3v6zM9 15v-2.5q0-.425.288-.712T10 11.5h2v-1H9V9h3.5q.425 0 .713.288T13.5 10v1.5q0 .425-.288.713t-.712.287h-2v1h3V15zm6 0v-1.5h3v-1h-2v-1h2v-1h-3V9h3.5q.425 0 .713.288T19.5 10v4q0 .425-.288.713T18.5 15z");
}
</style><path class="musdqpbsn"/>`,
		"fallback": "material-symbols:123",
	});
}

export default Component;
