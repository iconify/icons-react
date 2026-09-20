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
		"content": `<style>.rd_q-ubmc {
  fill: currentColor;
  d: path("M10 2a8 8 0 0 1 7.993 8.331a3 3 0 0 0-1.02-.945A7 7 0 1 0 11 16.93v1.01q-.492.06-1 .061a8 8 0 1 1 0-16m6.97 8.645c.33.356.53.832.53 1.355v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1a2 2 0 0 1 3.47-1.355M14.5 13h2v-1a1 1 0 1 0-2 0zm.345 3.366a.75.75 0 1 0 1.31-.732a.75.75 0 0 0-1.31.732m-1.487-8.72a.5.5 0 0 1 .058.638l-.058.07l-4.004 4.004a.5.5 0 0 1-.638.058l-.07-.058l-2-2a.5.5 0 0 1 .638-.765l.07.058L9 11.298l3.651-3.652a.5.5 0 0 1 .707 0");
}
</style><path class="rd_q-ubmc"/>`,
		"fallback": "fluent:checkmark-lock-20-regular",
	});
}

export default Component;
