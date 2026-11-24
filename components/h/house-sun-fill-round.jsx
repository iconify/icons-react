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
		"content": `<style>.euj858b5b {
  fill: currentColor;
  d: path("M3 17v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5m8-8a1 1 0 0 0 2 0v-.5a1 1 0 0 0-2 0Zm-2.889 1.525l.353.354c.391.39 1.024.39 1.415 0c.39-.391.39-1.024 0-1.415l-.354-.353a.999.999 0 1 0-1.414 1.414m6.364-1.414l-.354.353a1 1 0 0 0 0 1.415c.391.39 1.024.39 1.415 0l.353-.354a.999.999 0 1 0-1.414-1.414m-4.317 3.11a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558M8 14a1 1 0 0 0 0-2h-.5a1 1 0 0 0 0 2Zm8-2a1 1 0 0 0 0 2h.5a1 1 0 0 0 0-2Zm-6.475 4.889l.354-.353c.39-.391.39-1.024 0-1.415a1 1 0 0 0-1.415 0l-.353.354a.999.999 0 1 0 1.414 1.414m6.364-1.414l-.353-.354a1 1 0 0 0-1.415 0a1 1 0 0 0 0 1.415l.354.353a.999.999 0 1 0 1.414-1.414M13 17a1 1 0 0 0-2 0v.5a1 1 0 0 0 2 0Z");
}
</style><path class="euj858b5b"/>`,
		"fallback": "coolicons:house-sun-fill-round",
	});
}

export default Component;
