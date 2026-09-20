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
		"content": `<style>.v9vdryb3d {
  fill: currentColor;
  d: path("M5.25 2A3.25 3.25 0 0 0 2 5.25v11.5A3.25 3.25 0 0 0 5.25 20h6.248a6.5 6.5 0 0 1-.422-1.5H5.25a1.75 1.75 0 0 1-1.75-1.75V5.25c0-.966.784-1.75 1.75-1.75h11.5c.966 0 1.75.784 1.75 1.75v5.826a6.5 6.5 0 0 1 1.5.422V5.25A3.25 3.25 0 0 0 16.75 2zm11.03 6.28a.75.75 0 1 0-1.06-1.06l-6.223 6.216L6.78 11.22a.75.75 0 0 0-1.06 1.06l2.745 2.746a.75.75 0 0 0 1.06 0zM17.5 12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h4.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L19.293 17z");
}
</style><path class="v9vdryb3d"/>`,
		"fallback": "fluent:checkbox-arrow-right-24-regular",
	});
}

export default Component;
