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
		"content": `<style>.cwkil7uuk {
  fill: currentColor;
  d: path("M3.146 10.354a.5.5 0 0 0 .708 0L8 6.207l4.146 4.147a.5.5 0 0 0 .708-.708l-4.5-4.5a.5.5 0 0 0-.708 0l-4.5 4.5a.5.5 0 0 0 0 .708");
}
</style><path class="cwkil7uuk"/>`,
		"fallback": "fluent:chevron-up-16-regular",
	});
}

export default Component;
