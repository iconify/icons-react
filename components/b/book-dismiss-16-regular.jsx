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
		"content": `<style>.rw5t2rgex {
  fill: currentColor;
  d: path("M11 1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2.257a5.5 5.5 0 0 1-.657-1H5a1 1 0 0 1-1-1v-.003h2.206a5.5 5.5 0 0 1-.184-1H4V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3.022q.516.048 1 .185V3a2 2 0 0 0-2-2m.5 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.854-6.354a.5.5 0 0 1 0 .708L12.207 11.5l1.147 1.146a.5.5 0 0 1-.708.708L11.5 12.207l-1.146 1.147a.5.5 0 0 1-.708-.708l1.147-1.146l-1.147-1.146a.5.5 0 0 1 .708-.708l1.146 1.147l1.146-1.147a.5.5 0 0 1 .708 0M6 3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm0 1h4v1H6z");
}
</style><path class="rw5t2rgex"/>`,
		"fallback": "fluent:book-dismiss-16-regular",
	});
}

export default Component;
