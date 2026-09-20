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
		"content": `<style>.f-22lzb0m {
  fill: currentColor;
  d: path("M5.616 21q-.691 0-1.153-.462T4 19.385V6.615q0-.69.463-1.152T5.616 5h1.769V2.77h1.077V5h7.154V2.77h1V5h1.769q.69 0 1.153.463T20 6.616v5h-1v-1H5v8.769q0 .23.192.423t.423.192h6.231v1zm8.615 0v-2.21l5.333-5.307q.148-.13.307-.19q.16-.062.32-.062q.165 0 .334.064q.17.065.298.194l.925.944q.123.148.188.308q.064.159.064.319t-.052.322t-.2.31L16.44 21zm5.96-4.985l.925-.956l-.925-.943l-.95.95z");
}
</style><path class="f-22lzb0m"/>`,
		"fallback": "material-symbols-light:edit-calendar",
	});
}

export default Component;
