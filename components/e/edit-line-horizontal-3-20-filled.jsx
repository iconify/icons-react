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
		"content": `<style>.josuv2ypo {
  fill: currentColor;
  d: path("M17.18 2.927a2.975 2.975 0 0 0-4.26-.054l-.669.67l4.207 4.206l.67-.669a2.975 2.975 0 0 0 .051-4.153m-13.635 9.32l8-7.998l4.206 4.207l-7.982 7.982a2.5 2.5 0 0 1-1.234.678l-3.926.873a.5.5 0 0 1-.597-.597l.878-3.95c.1-.452.328-.867.655-1.194M2.5 3h8.88l-1 1H2.5a.5.5 0 0 1 0-1m0 3h5.88L7.378 7H2.5a.5.5 0 0 1 0-1m0 3h2.879l-1 1H2.5a.5.5 0 0 1 0-1");
}
</style><path class="josuv2ypo"/>`,
		"fallback": "fluent:edit-line-horizontal-3-20-filled",
	});
}

export default Component;
