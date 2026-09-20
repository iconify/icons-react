import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rik5m2-ix {
  fill: currentColor;
  d: path("M6.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M7 7a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M9 4.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-.5 3a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m.5 2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-5-8A1.5 1.5 0 0 0 4 3.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-5A1.5 1.5 0 0 0 11.5 7H11V3.5A1.5 1.5 0 0 0 9.5 2zM5 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 1 .5.5V13h-1v-1.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V13H5zm5 8.5v1h-.997v-1zm-1.997 0v1H7v-1z");
}
</style><path class="rik5m2-ix"/>`,
		"fallback": "fluent:building-16-regular",
	});
}

export default Component;
