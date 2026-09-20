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
		"content": `<style>.fvk2b2b2d {
  fill: currentColor;
  d: path("M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m-1.25 9.44l4.47-4.47a.75.75 0 0 1 1.133.976l-.073.084l-5 5a.75.75 0 0 1-.976.073l-.084-.073l-2.5-2.5a.75.75 0 0 1 .976-1.133l.084.073zM8.5 15h6.75a.75.75 0 0 1 0 1.5H8.5a.75.75 0 0 1 0-1.5");
}
</style><path class="fvk2b2b2d"/>`,
		"fallback": "fluent:checkmark-underline-circle-24-filled",
	});
}

export default Component;
