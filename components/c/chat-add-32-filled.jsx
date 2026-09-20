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
		"content": `<style>.fl4fyubvi {
  fill: currentColor;
  d: path("M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14c-2.368 0-4.602-.589-6.56-1.629l-5.528 1.572A1.5 1.5 0 0 1 2.06 28.09l1.572-5.527A13.94 13.94 0 0 1 2 16C2 8.268 8.267 2 16 2m0 7a1 1 0 0 0-1 1v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5v-5a1 1 0 0 0-1-1");
}
</style><path class="fl4fyubvi"/>`,
		"fallback": "fluent:chat-add-32-filled",
	});
}

export default Component;
