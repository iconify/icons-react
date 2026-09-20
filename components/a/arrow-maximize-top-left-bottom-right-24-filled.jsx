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
		"content": `<style>.vty-ythxu {
  fill: currentColor;
  d: path("M12 3.5a1 1 0 1 1 0 2H6.914L18.5 17.086V12a1 1 0 1 1 2 0v7.5a1 1 0 0 1-1 1H12a1 1 0 1 1 0-2h5.086L5.5 6.914V12a1 1 0 1 1-2 0V4.5a1 1 0 0 1 1-1z");
}
</style><path class="vty-ythxu"/>`,
		"fallback": "fluent:arrow-maximize-top-left-bottom-right-24-filled",
	});
}

export default Component;
