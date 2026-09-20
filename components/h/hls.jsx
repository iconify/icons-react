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
		"content": `<style>.mid4abcmk {
  fill: currentColor;
  d: path("M3 15V9h1.5v2h2V9H8v6H6.5v-2.5h-2V15zm7 0V9h1.5v4.5H14V15zm6.5 0q-.425 0-.712-.288T15.5 14v-1H17v.5h2v-1h-2.5q-.425 0-.712-.288T15.5 11.5V10q0-.425.288-.712T16.5 9h3q.425 0 .713.288T20.5 10v1H19v-.5h-2v1h2.5q.425 0 .713.288t.287.712V14q0 .425-.288.713T19.5 15z");
}
</style><path class="mid4abcmk"/>`,
		"fallback": "material-symbols:hls",
	});
}

export default Component;
