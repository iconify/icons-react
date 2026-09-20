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
		"content": `<style>.vj8uyccfh {
  fill: currentColor;
  d: path("M208 154H48a14 14 0 0 0-14 14v24a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14v-24a14 14 0 0 0-14-14m2 38a2 2 0 0 1-2 2H48a2 2 0 0 1-2-2v-24a2 2 0 0 1 2-2h160a2 2 0 0 1 2 2ZM48.24 134h159.52a14.19 14.19 0 0 0 13.1-8.55a13.61 13.61 0 0 0-2.72-15L144.41 33a22.76 22.76 0 0 0-32.82 0l-73.73 77.5a13.61 13.61 0 0 0-2.72 15a14.19 14.19 0 0 0 13.1 8.5m-1.69-15.23l73.73-77.51a10.77 10.77 0 0 1 15.44 0l73.73 77.51a1.67 1.67 0 0 1 .38 2a2.11 2.11 0 0 1-2.07 1.27H48.24a2.11 2.11 0 0 1-2.07-1.27a1.67 1.67 0 0 1 .38-2");
}
</style><path class="vj8uyccfh"/>`,
		"fallback": "ph:eject-light",
	});
}

export default Component;
