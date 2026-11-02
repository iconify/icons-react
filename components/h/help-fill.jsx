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
		"content": `<style>.wv751gbui {
  fill: currentColor;
  d: path("M7.393 8.053A5.001 5.001 0 1 1 12 15a1.002 1.002 0 0 1-.866-1.5c.179-.309.509-.5.866-.5a3 3 0 1 0-3-3a1 1 0 0 1-2 0a5 5 0 0 1 .393-1.947M12.01 17a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2Z");
}
</style><path class="wv751gbui"/>`,
		"fallback": "coolicons:help-fill",
	});
}

export default Component;
