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
		"content": `<style>.wnvvjmb3e {
  fill: currentColor;
  d: path("M5.616 16q-.691 0-1.153-.462T4 14.385v-4.77q0-.69.463-1.152T5.616 8h12.769q.69 0 1.153.463T20 9.616v4.769q0 .69-.462 1.153T18.384 16zm0-1h12.769q.23 0 .423-.192t.192-.423v-4.77q0-.23-.192-.423T18.384 9H5.616q-.231 0-.424.192T5 9.616v4.769q0 .23.192.423t.423.192M4 5.616v-1h16v1zm0 13.769v-1h16v1zM5 9v6z");
}
</style><path class="wnvvjmb3e"/>`,
		"fallback": "material-symbols-light:calendar-view-day-outline",
	});
}

export default Component;
