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
		"content": `<style>.yygsfid9e {
  fill: currentColor;
  d: path("M7.07 3c-1.416 0-2.647.97-2.978 2.346L2.1 13.619A3.55 3.55 0 0 0 5.552 18h12.892a3.55 3.55 0 0 0 3.45-4.38l-1.99-8.274A3.06 3.06 0 0 0 16.925 3zM5.55 5.697A1.56 1.56 0 0 1 7.07 4.5h9.856c.722 0 1.35.495 1.519 1.197l1.992 8.273a2.05 2.05 0 0 1-1.994 2.53H5.553a2.05 2.05 0 0 1-1.993-2.53zM6.748 19a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="yygsfid9e"/>`,
		"fallback": "fluent:device-meeting-room-24-regular",
	});
}

export default Component;
