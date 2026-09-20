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
		"content": `<style>.gdal_dbld {
  fill: currentColor;
  d: path("M18.79 8.387a1 1 0 0 1-1.497 1.32L12 4.414L6.707 9.707l-.094.083a1 1 0 0 1-1.32-1.497l6-6l.094-.083a1 1 0 0 1 1.32.083l6 6zM5.21 15.613a1 1 0 0 1 1.497-1.32L12 19.586l5.293-5.293l.094-.083a1 1 0 0 1 1.32 1.497l-6 6l-.094.083a1 1 0 0 1-1.32-.083l-6-6z");
}
</style><path class="gdal_dbld"/>`,
		"fallback": "fluent:chevron-up-down-24-filled",
	});
}

export default Component;
