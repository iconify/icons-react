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
		"content": `<style>.l576pevuv {
  fill: currentColor;
  d: path("M6.096 3a2.5 2.5 0 0 0-2.438 1.946l-1.59 7A2.5 2.5 0 0 0 4.504 15h10.989a2.5 2.5 0 0 0 2.438-3.054l-1.591-7A2.5 2.5 0 0 0 13.903 3zM4.633 5.168A1.5 1.5 0 0 1 6.096 4h7.807a1.5 1.5 0 0 1 1.463 1.168l1.59 7A1.5 1.5 0 0 1 15.495 14H4.505a1.5 1.5 0 0 1-1.463-1.832zM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1z");
}
</style><path class="l576pevuv"/>`,
		"fallback": "fluent:device-meeting-room-20-regular",
	});
}

export default Component;
