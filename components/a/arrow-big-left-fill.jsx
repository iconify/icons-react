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
		"content": `<style>.om5lwy3ly {
  fill: currentColor;
  d: path("M21 10v4a2 2 0 0 1-2 2h-6v3c.001.203-.047.402-.14.582c-.371.712-1.242.835-1.932.549a2 2 0 0 1-.635-.424l-6-6a2.414 2.414 0 0 1 0-3.414l6-6c.182-.182.398-.326.635-.424c.69-.286 1.561-.163 1.932.549c.093.18.141.379.14.582v3h6a2 2 0 0 1 2 2");
}
</style><path class="om5lwy3ly"/>`,
		"fallback": "coolicons:arrow-big-left-fill",
	});
}

export default Component;
