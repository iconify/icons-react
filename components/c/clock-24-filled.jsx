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
		"content": `<style>.cisrnxwqx {
  fill: currentColor;
  d: path("M15.25 13.5h-4a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0V12h3.25a.75.75 0 0 1 0 1.5M12 2C6.478 2 2 6.478 2 12s4.478 10 10 10s10-4.478 10-10S17.522 2 12 2");
}
</style><path class="cisrnxwqx"/>`,
		"fallback": "fluent:clock-24-filled",
	});
}

export default Component;
