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
		"content": `<style>.erakd9qbx {
  fill: currentColor;
  d: path("M2.75 2a.75.75 0 0 1 .75.75v12.5c0 .69.56 1.25 1.25 1.25h12.5a.75.75 0 0 1 0 1.5H4.75A2.75 2.75 0 0 1 2 15.25V2.75A.75.75 0 0 1 2.75 2M10 7.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m4.5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0");
}
</style><path class="erakd9qbx"/>`,
		"fallback": "fluent:data-scatter-20-filled",
	});
}

export default Component;
