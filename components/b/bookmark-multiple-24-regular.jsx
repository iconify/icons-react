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
		"content": `<style>.o8cs5obdl {
  fill: currentColor;
  d: path("M4 6.748a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25V21.25a.75.75 0 0 1-1.127.648l-5.623-3.28l-5.622 3.28A.75.75 0 0 1 4 21.25zm2.25-.75a.75.75 0 0 0-.75.75v13.196l4.873-2.842a.75.75 0 0 1 .755 0l4.873 2.842V6.748a.75.75 0 0 0-.75-.75zm9-3.998A4.75 4.75 0 0 1 20 6.75v11.873a.75.75 0 0 1-1.5 0V6.751a3.25 3.25 0 0 0-3.25-3.25H6.637s.113-.558.797-1.082C8 2 8.602 2 8.602 2z");
}
</style><path class="o8cs5obdl"/>`,
		"fallback": "fluent:bookmark-multiple-24-regular",
	});
}

export default Component;
