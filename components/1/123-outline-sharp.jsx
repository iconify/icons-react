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
		"content": `<style>.u4hzxacjw {
  fill: currentColor;
  d: path("M5.5 15v-4.5H4V9h3v6zM9 15v-3.5h3v-1H9V9h4.5v3.5h-3v1h3V15zm6 0v-1.5h3v-1h-2v-1h2v-1h-3V9h4.5v6z");
}
</style><path class="u4hzxacjw"/>`,
		"fallback": "material-symbols:123-outline-sharp",
	});
}

export default Component;
