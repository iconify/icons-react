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
		"content": `<style>.t1h037g7e {
  fill: currentColor;
  d: path("M4.5 3a.5.5 0 0 0-.5.5v2.793L2.146 8.146A.5.5 0 0 0 2 8.5v5a.5.5 0 0 0 .5.5H4v2.5a.5.5 0 0 0 1 0V14h1v2.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.146-.354L7 6.293V3.5a.5.5 0 0 0-.5-.5zm11 14a.5.5 0 0 0 .5-.5v-2.793l1.854-1.853A.5.5 0 0 0 18 11.5v-5a.5.5 0 0 0-.5-.5H17V3.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V6h-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .146.354L13 13.707V16.5a.5.5 0 0 0 .5.5zM13 6V4h3v2z");
}
</style><path class="t1h037g7e"/>`,
		"fallback": "fluent:connector-20-filled",
	});
}

export default Component;
