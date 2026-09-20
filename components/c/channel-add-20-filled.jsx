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
		"content": `<style>.ng4i9x2_d {
  fill: currentColor;
  d: path("M5.5 3a2.5 2.5 0 0 0-2.302 1.523Q3.347 4.5 3.5 4.5A2 2 0 1 1 3 8.437V14.5A2.5 2.5 0 0 0 5.5 17h4.1c-.384-.75-.6-1.6-.6-2.5s.216-1.75.6-2.5H7.5a.5.5 0 0 1 0-1h2.757A5.49 5.49 0 0 1 14.5 9c.9 0 1.75.216 2.5.6V5.5A2.5 2.5 0 0 0 14.5 3zM7 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-3.5-3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m15.5 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z");
}
</style><path class="ng4i9x2_d"/>`,
		"fallback": "fluent:channel-add-20-filled",
	});
}

export default Component;
