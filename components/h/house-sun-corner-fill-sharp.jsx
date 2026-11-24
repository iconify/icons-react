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
		"content": `<style>.d4y-quenv {
  fill: currentColor;
  d: path("M17.714 9H9v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10c0-.288.124-.563.341-.753l8-7c.378-.329.94-.329 1.318 0l5.714 5A1.001 1.001 0 0 1 17.714 9M15.5 12.5V12a1 1 0 0 1 2 0v.5a1 1 0 0 1-2 0m-2.536 1.879l-.353-.354a.999.999 0 1 1 1.414-1.414l.354.353c.39.391.39 1.024 0 1.415c-.391.39-1.024.39-1.415 0m5.657-1.415l.354-.353a.999.999 0 1 1 1.414 1.414l-.353.354a1 1 0 0 1-1.415-1.415M14.5 16.5a2 2 0 1 1 3.999-.001a2 2 0 0 1-3.999.001m-2 1H12a1 1 0 0 1 0-2h.5a1 1 0 0 1 0 2m8-2h.5a1 1 0 0 1 0 2h-.5a1 1 0 0 1 0-2m-6.121 4.536l-.354.353a.999.999 0 1 1-1.414-1.414l.353-.354a1 1 0 0 1 1.415 1.415m5.657-1.415l.353.354a.999.999 0 1 1-1.414 1.414l-.354-.353a1 1 0 0 1 0-1.415a1 1 0 0 1 1.415 0M17.5 20.5v.5a1 1 0 0 1-2 0v-.5a1 1 0 0 1 2 0");
}
</style><path class="d4y-quenv"/>`,
		"fallback": "coolicons:house-sun-corner-fill-sharp",
	});
}

export default Component;
