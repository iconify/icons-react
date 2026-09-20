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
		"content": `<style>.sdoq8lb-p {
  fill: currentColor;
  d: path("M11 8a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-1 0a2 2 0 1 0-4 0a2 2 0 0 0 4 0M6.618 2a1.5 1.5 0 0 0-1.342.83L4.691 4H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-.691l-.585-1.17A1.5 1.5 0 0 0 9.382 2zm-.447 1.276A.5.5 0 0 1 6.618 3h2.764a.5.5 0 0 1 .447.276l.724 1.448A.5.5 0 0 0 11 5h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1a.5.5 0 0 0 .447-.276z");
}
</style><path class="sdoq8lb-p"/>`,
		"fallback": "fluent:camera-16-regular",
	});
}

export default Component;
