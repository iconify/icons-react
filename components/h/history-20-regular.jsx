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
		"content": `<style>.gedq92b0w {
  fill: currentColor;
  d: path("M10 4a6 6 0 1 1-5.982 5.538a.5.5 0 1 0-.998-.076Q3 9.73 3 10a7 7 0 1 0 2-4.899V3.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H5.528A5.98 5.98 0 0 1 10 4m0 2.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H10z");
}
</style><path class="gedq92b0w"/>`,
		"fallback": "fluent:history-20-regular",
	});
}

export default Component;
