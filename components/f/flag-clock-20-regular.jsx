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
		"content": `<style>.vx0ds-vyf {
  fill: currentColor;
  d: path("M5 13h4.207q.149-.524.393-1H5V4h10.566l-2.482 3.723a.5.5 0 0 0 0 .554l.53.794a5.5 5.5 0 0 1 1.158-.064L14.101 8l2.815-4.223A.5.5 0 0 0 16.5 3h-12a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0zm14 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="vx0ds-vyf"/>`,
		"fallback": "fluent:flag-clock-20-regular",
	});
}

export default Component;
