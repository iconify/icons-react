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
		"content": `<style>.fh4zag--o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 14a2 2 0 0 1-2 2h-6v3c.001.203-.047.402-.14.582c-.371.712-1.242.835-1.932.549a2 2 0 0 1-.635-.424l-6-6a2.414 2.414 0 0 1 0-3.414l6-6c.182-.182.398-.326.635-.424c.69-.286 1.561-.163 1.932.549c.093.18.141.379.14.582v3h6a2 2 0 0 1 2 2Z");
}
</style><path class="fh4zag--o"/>`,
		"fallback": "coolicons:arrow-big-left-bulk",
	});
}

export default Component;
