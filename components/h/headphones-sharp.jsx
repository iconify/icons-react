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
		"content": `<style>.efks9ct0m {
  fill: currentColor;
  d: path("M8.077 20H4v-7.997q0-1.666.626-3.121T6.34 6.34t2.54-1.714T12 4t3.12.626t2.54 1.714t1.713 2.542t.626 3.121V20h-4.077v-6.154H19V12q0-2.925-2.037-4.962T12 5T7.038 7.038T5 12v1.846h3.077z");
}
</style><path class="efks9ct0m"/>`,
		"fallback": "material-symbols-light:headphones-sharp",
	});
}

export default Component;
