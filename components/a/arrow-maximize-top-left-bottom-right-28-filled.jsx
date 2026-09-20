import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vhmyyqqmn {
  fill: currentColor;
  d: path("M12.5 3.5a1 1 0 1 1 0 2H6.914L22.5 21.086V15.5a1 1 0 1 1 2 0v8a1 1 0 0 1-1 1h-8a1 1 0 1 1 0-2h5.586L5.5 6.914V12.5a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1z");
}
</style><path class="vhmyyqqmn"/>`,
		"fallback": "fluent:arrow-maximize-top-left-bottom-right-28-filled",
	});
}

export default Component;
