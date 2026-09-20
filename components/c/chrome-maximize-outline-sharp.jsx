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
		"content": `<style>.k8j0ginoh {
  fill: currentColor;
  d: path("M4 20V4h16v16Zm2-2h12V6H6ZM6 6v12Z");
}
</style><path class="k8j0ginoh"/>`,
		"fallback": "material-symbols:chrome-maximize-outline-sharp",
	});
}

export default Component;
