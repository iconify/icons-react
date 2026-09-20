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
		"content": `<style>.nsz0zecab {
  fill: currentColor;
  d: path("M44 34.75A6.25 6.25 0 0 1 37.75 41h-27.5A6.25 6.25 0 0 1 4 34.75V23.371A8.72 8.72 0 0 0 10.25 26H20v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1h9.75A8.72 8.72 0 0 0 44 23.371zM27.75 4A4.25 4.25 0 0 1 32 8.25V11h5.75a6.25 6.25 0 1 1 0 12.5H28V23a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v.5h-9.75a6.25 6.25 0 1 1 0-12.5H16V8.25A4.25 4.25 0 0 1 20.25 4zm-7.5 2.5a1.75 1.75 0 0 0-1.75 1.75V11h11V8.25a1.75 1.75 0 0 0-1.75-1.75z");
}
</style><path class="nsz0zecab"/>`,
		"fallback": "fluent:briefcase-48-filled",
	});
}

export default Component;
