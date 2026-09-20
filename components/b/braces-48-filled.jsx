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
		"content": `<style>.i5z7uuobr {
  fill: currentColor;
  d: path("M14 6a5 5 0 0 0-5 5v8.05c0 .767-.068 1.34-.376 1.846c-.293.483-.946 1.13-2.598 1.68a1.5 1.5 0 0 0 0 2.847c1.648.55 2.266 1.182 2.558 1.727c.334.624.416 1.43.416 2.733V37a5 5 0 0 0 5 5h.5a1.5 1.5 0 0 0 0-3H14a2 2 0 0 1-2-2v-7.117c0-1.28-.043-2.79-.772-4.15a5.5 5.5 0 0 0-1.457-1.724a5.7 5.7 0 0 0 1.417-1.556c.755-1.243.812-2.52.812-3.403V11a2 2 0 0 1 2-2h.5a1.5 1.5 0 0 0 0-3zm20 0a5 5 0 0 1 5 5v8.05c0 .767.069 1.34.376 1.846c.293.483.946 1.13 2.598 1.68a1.5 1.5 0 0 1 0 2.847c-1.648.55-2.266 1.182-2.558 1.727c-.334.624-.416 1.43-.416 2.733V37a5 5 0 0 1-5 5h-.5a1.5 1.5 0 0 1 0-3h.5a2 2 0 0 0 2-2v-7.117c0-1.28.043-2.79.772-4.15a5.5 5.5 0 0 1 1.457-1.724a5.7 5.7 0 0 1-1.417-1.556C36.057 21.21 36 19.934 36 19.05V11a2 2 0 0 0-2-2h-.5a1.5 1.5 0 0 1 0-3z");
}
</style><path class="i5z7uuobr"/>`,
		"fallback": "fluent:braces-48-filled",
	});
}

export default Component;
