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
		"content": `<style>.dp3dbbfld {
  fill: currentColor;
  d: path("M8 2a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 8 2m2.75 2a.75.75 0 0 1 .75.75v6.5a.75.75 0 0 1-1.5 0v-6.5a.75.75 0 0 1 .75-.75M6 4.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM13.75 6a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M3 6.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0z");
}
</style><path class="dp3dbbfld"/>`,
		"fallback": "fluent:device-eq-16-filled",
	});
}

export default Component;
