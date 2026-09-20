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
		"content": `<style>.zvq963d2l {
  fill: currentColor;
  d: path("M5 4.5A1.5 1.5 0 0 1 6.5 3H14v6.5a2.5 2.5 0 0 0 2.5 2.5H23v11.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 5 23.5zM22.964 11H16.5A1.5 1.5 0 0 1 15 9.5V3.036c.275.062.53.2.732.403l6.829 6.829a1.5 1.5 0 0 1 .403.732M6.5 2A2.5 2.5 0 0 0 4 4.5v19A2.5 2.5 0 0 0 6.5 26h15a2.5 2.5 0 0 0 2.5-2.5V11.328a2.5 2.5 0 0 0-.732-1.767l-6.829-6.829A2.5 2.5 0 0 0 14.672 2z");
}
</style><path class="zvq963d2l"/>`,
		"fallback": "fluent:document-28-light",
	});
}

export default Component;
