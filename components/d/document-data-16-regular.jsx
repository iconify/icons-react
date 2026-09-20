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
		"content": `<style>.moquvx2gz {
  fill: currentColor;
  d: path("M5.5 13a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 0 .5.5m5.5-.5a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0zm-3.06.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5M3 3a2 2 0 0 1 2-2h3.586a1.5 1.5 0 0 1 1.061.439l2.914 2.914c.281.282.439.663.439 1.061V13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6H9.5A1.5 1.5 0 0 1 8 4.5V2zm4.5 3h2.293L9 2.207V4.5a.5.5 0 0 0 .5.5");
}
</style><path class="moquvx2gz"/>`,
		"fallback": "fluent:document-data-16-regular",
	});
}

export default Component;
