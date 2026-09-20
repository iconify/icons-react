import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yzzligb_z {
  fill: currentColor;
  d: path("M19.866 6.366a1.25 1.25 0 0 0 0 1.768L24.732 13H15.25C8.485 13 3 18.485 3 25.25v.5a1.25 1.25 0 1 0 2.5 0v-.5a9.75 9.75 0 0 1 9.75-9.75h9.482l-4.866 4.866a1.25 1.25 0 0 0 1.768 1.768l7-7a1.25 1.25 0 0 0 0-1.768l-7-7a1.25 1.25 0 0 0-1.768 0");
}
</style><path class="yzzligb_z"/>`,
		"fallback": "fluent:arrow-forward-32-filled",
	});
}

export default Component;
