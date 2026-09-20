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
		"content": `<style>.dj7u1xb7o {
  fill: currentColor;
  d: path("M12.5 16.5h6v-5H16v1h1.5v3h-4v-7h5v-1h-6zm-7 0h5v-4L10 12l.5-.5v-4h-5v1h4v3h-4v1h4v3h-4zM2 20V4h20v16z");
}
</style><path class="dj7u1xb7o"/>`,
		"fallback": "material-symbols-light:3g-mobiledata-badge-sharp",
	});
}

export default Component;
