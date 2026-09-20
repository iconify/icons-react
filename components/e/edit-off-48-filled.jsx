import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n2rmior8h {
  fill: currentColor;
  d: path("m28 29.768l13.866 13.866a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768L18.233 20L8.038 30.197a6 6 0 0 0-1.572 2.758L4.039 42.44a1.25 1.25 0 0 0 1.52 1.521l9.487-2.424a6 6 0 0 0 2.76-1.573zm10-10.001l-6.464 6.466l-9.768-9.768L28.233 10zM32.207 6.026a6.907 6.907 0 1 1 9.768 9.767l-2.205 2.206L30 8.231z");
}
</style><path class="n2rmior8h"/>`,
		"fallback": "fluent:edit-off-48-filled",
	});
}

export default Component;
