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
		"content": `<style>.cxhvths3u {
  fill: currentColor;
  d: path("M2.854 2.121a2.5 2.5 0 0 0-1.768 3.062L2.12 9.047A2.5 2.5 0 0 0 5 10.857V8a3 3 0 0 1 3-3h2.354L9.78 2.854a2.5 2.5 0 0 0-3.062-1.768zM6 8a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm4.5 0a.5.5 0 0 0-.5.5V10H8.5a.5.5 0 0 0 0 1H10v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H11V8.5a.5.5 0 0 0-.5-.5");
}
</style><path class="cxhvths3u"/>`,
		"fallback": "fluent:collections-16-filled",
	});
}

export default Component;
