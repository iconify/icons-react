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
		"content": `<style>.hlloqqbhf {
  d: path("M18.75 10.2a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5");
}

.oiinevb8g {
  fill-rule: evenodd;
  d: path("M15.6 12.066V12a6.3 6.3 0 1 0-6.3 6.3h6.3z");
}
</style><path clip-rule="evenodd" class="oiinevb8g"/><path class="hlloqqbhf"/>`,
		"fallback": "token-branded:atr",
	});
}

export default Component;
