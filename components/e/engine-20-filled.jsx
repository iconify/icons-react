import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jewbp3bgv {
  fill: currentColor;
  d: path("M7.5 2.5A.5.5 0 0 1 8 3v1h2V3a.5.5 0 0 1 1 0v1h2.191a1 1 0 0 1 .894.553L14.81 6H16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1.191l-.724 1.447a1 1 0 0 1-.894.553H7.707A1 1 0 0 1 7 16.707l-2.414-2.414A2 2 0 0 1 4 12.879V10H3v2.5a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 1 0V9h1V6a2 2 0 0 1 2-2h1V3a.5.5 0 0 1 .5-.5m0 4.5a.5.5 0 0 0-.5.5V10a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 0-1H11V7.5a.5.5 0 0 0-1 0V11H9a1 1 0 0 1-1-1V7.5a.5.5 0 0 0-.5-.5");
}
</style><path class="jewbp3bgv"/>`,
		"fallback": "fluent:engine-20-filled",
	});
}

export default Component;
