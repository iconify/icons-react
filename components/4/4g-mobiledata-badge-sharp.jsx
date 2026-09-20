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
		"content": `<style>.pzkndbbuw {
  fill: currentColor;
  d: path("M12.923 16.5h6v-5h-2.115v1h1.115v3h-4v-7h5v-1h-6zm-4.423 0h1v-3h2v-1h-2v-5h-1v5h-3v-5h-1v6h4zM2 20V4h20v16z");
}
</style><path class="pzkndbbuw"/>`,
		"fallback": "material-symbols-light:4g-mobiledata-badge-sharp",
	});
}

export default Component;
