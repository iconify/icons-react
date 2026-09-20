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
		"content": `<style>.sluitbbrs {
  fill: currentColor;
  d: path("M11.349 2.098a3.75 3.75 0 0 1 5.303 0l9.25 9.253a3.75 3.75 0 0 1 0 5.302l-9.25 9.251a3.75 3.75 0 0 1-5.303 0l-9.251-9.25a3.75 3.75 0 0 1 0-5.303zm4.43 5.122a.75.75 0 0 0-1.06 1.06L16.44 10h-2.69C11.68 10 10 11.68 10 13.75v4.5a.75.75 0 0 0 1.5 0v-4.5a2.25 2.25 0 0 1 2.25-2.25h2.69l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z");
}
</style><path class="sluitbbrs"/>`,
		"fallback": "fluent:directions-28-filled",
	});
}

export default Component;
