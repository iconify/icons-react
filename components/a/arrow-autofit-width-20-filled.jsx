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
		"content": `<style>.e8vl0tbwo {
  fill: currentColor;
  d: path("m15.503 15.003l-.735.71a.75.75 0 1 0 1.042 1.078l1.886-1.82a1 1 0 0 0 0-1.44l-1.886-1.82a.75.75 0 0 0-1.042 1.079l.739.713H12.75a.75.75 0 0 0 0 1.5zM15 3a2 2 0 0 1 2 2v4.25a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v4.25a.75.75 0 0 1-1.5 0V5a2 2 0 0 1 2-2zM5.234 15.712l-.735-.71h2.752a.75.75 0 1 0 0-1.5H4.495l.739-.713a.75.75 0 0 0-1.042-1.078l-1.886 1.82a1 1 0 0 0 0 1.44l1.886 1.82a.75.75 0 0 0 1.042-1.079");
}
</style><path class="e8vl0tbwo"/>`,
		"fallback": "fluent:arrow-autofit-width-20-filled",
	});
}

export default Component;
