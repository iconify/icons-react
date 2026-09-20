import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gejgpv6pb {
  fill: currentColor;
  d: path("M232 66h-33.52l29.76-29.76a6 6 0 1 0-8.48-8.48L190 57.52V24a6 6 0 0 0-12 0v36.15a62 62 0 0 0-77.8 8C60.17 107.4 30.05 201.45 27.38 210a14 14 0 0 0 18.67 18.67c8.5-2.67 102.62-32.81 141.79-72.77a62 62 0 0 0 8-77.84H232a6 6 0 0 0 0-12Zm-52.69 81.41C170 157 157 166 142.69 174.24l-26.46-26.47a6 6 0 1 0-8.49 8.49l24 24c-41.69 22-89 36.82-89.73 37a6.6 6.6 0 0 0-1.06.44a2 2 0 0 1-2.7-2.7a6.6 6.6 0 0 0 .45-1c.3-1 28.85-92.28 65.78-133l35.27 35.26a6 6 0 1 0 8.48-8.48l-35.1-35.1a50 50 0 0 1 66.18 74.74Z");
}
</style><path class="gejgpv6pb"/>`,
		"fallback": "ph:carrot-light",
	});
}

export default Component;
