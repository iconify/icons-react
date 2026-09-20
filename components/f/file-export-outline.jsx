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
		"content": `<style>.zm8guo8vy {
  fill: currentColor;
  d: path("m5.05 22.375l-1.4-1.425L6.6 18H4.35v-2H10v5.65H8v-2.225zM12 22v-2h6V9h-5V4H6v10H4V4q0-.825.588-1.412T6 2h8l6 6v12q0 .825-.587 1.413T18 22z");
}
</style><path class="zm8guo8vy"/>`,
		"fallback": "material-symbols:file-export-outline",
	});
}

export default Component;
