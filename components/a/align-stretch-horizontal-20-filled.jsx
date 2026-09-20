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
		"content": `<style>.irr6-5bwm {
  fill: currentColor;
  d: path("M3 17.5a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0zm13 0a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-1 0zM13 16a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2zm2-9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2z");
}
</style><path class="irr6-5bwm"/>`,
		"fallback": "fluent:align-stretch-horizontal-20-filled",
	});
}

export default Component;
