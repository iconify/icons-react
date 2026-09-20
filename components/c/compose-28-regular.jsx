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
		"content": `<style>.kcqjh-boy {
  fill: currentColor;
  d: path("M16.25 4a.75.75 0 0 1 0 1.5h-9.5A2.25 2.25 0 0 0 4.5 7.75v13.5a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25v-9.5a.75.75 0 0 1 1.5 0v9.5A3.75 3.75 0 0 1 20.25 25H6.75A3.75 3.75 0 0 1 3 21.25V7.75A3.75 3.75 0 0 1 6.75 4zm7.47-.78a.75.75 0 1 1 1.06 1.06L12.59 16.47L11 17l.53-1.59z");
}
</style><path class="kcqjh-boy"/>`,
		"fallback": "fluent:compose-28-regular",
	});
}

export default Component;
