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
		"content": `<style>.qie9yjbau {
  fill: currentColor;
  d: path("M16 4a1 1 0 1 1 0 2H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-9a1 1 0 1 1 2 0v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm7.293-.707a1 1 0 0 1 1.414 1.414L13.121 16.293L11 17l.707-2.121z");
}
</style><path class="qie9yjbau"/>`,
		"fallback": "fluent:compose-28-filled",
	});
}

export default Component;
