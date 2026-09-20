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
		"content": `<style>.br98y2bep {
  fill: currentColor;
  d: path("M1 21v-4l2-2V9L1 7V3h2v2h2V3h2v2h2V3h2v4L9 9v1h6V9l-2-2V3h2v2h2V3h2v2h2V3h2v4l-2 2v6l2 2v4h-9v-5h-4v5zm2-2h5v-5h8v5h5v-1.175l-2-2v-7.65L20.175 7h-4.35L17 8.175V12H7V8.175L8.175 7h-4.35L5 8.175v7.65l-2 2zm9-6");
}
</style><path class="br98y2bep"/>`,
		"fallback": "material-symbols:fort-outline-sharp",
	});
}

export default Component;
