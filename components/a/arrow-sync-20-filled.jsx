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
		"content": `<style>.uzpw_-bqt {
  fill: currentColor;
  d: path("M9.885 3.75a6.25 6.25 0 0 0-3.628 11.256a.75.75 0 0 1-.9 1.2a7.75 7.75 0 0 1 3.99-13.93l-.584-.586A.75.75 0 0 1 9.823.63l2.122 2.121a.75.75 0 0 1 0 1.06L9.823 5.934a.75.75 0 0 1-1.06-1.06zm.23 12.498a6.25 6.25 0 0 0 3.628-11.256a.75.75 0 0 1 .9-1.2q.439.33.837.727a7.75 7.75 0 0 1-4.828 13.203l.585.585a.75.75 0 1 1-1.06 1.061l-2.122-2.121a.75.75 0 0 1 0-1.06l2.122-2.122a.75.75 0 1 1 1.06 1.06z");
}
</style><path class="uzpw_-bqt"/>`,
		"fallback": "fluent:arrow-sync-20-filled",
	});
}

export default Component;
