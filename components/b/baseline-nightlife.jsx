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
		"content": `<style>.z8voavijn {
  fill: currentColor;
  d: path("M1 5h14l-6 9v4h2v2H5v-2h2v-4zm9.1 4l1.4-2H4.49l1.4 2zM17 5h5v3h-3v9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3a3 3 0 0 1 1 .17z");
}
</style><path class="z8voavijn"/>`,
		"fallback": "ic:baseline-nightlife",
	});
}

export default Component;
