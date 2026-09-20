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
		"content": `<style>.u3sgec5vm {
  fill: currentColor;
  d: path("M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6c.768 0 1.47-.289 2-.764c.53.475 1.232.764 2 .764h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-6c-.768 0-1.47.289-2 .764A3 3 0 0 0 10 4zm7 3v10a1 1 0 0 1-1 1H4V6h6a1 1 0 0 1 1 1m2 10V7a1 1 0 0 1 1-1h6v12h-6a1 1 0 0 1-1-1");
}
</style><path class="u3sgec5vm"/>`,
		"fallback": "fluent:book-open-24-filled",
	});
}

export default Component;
