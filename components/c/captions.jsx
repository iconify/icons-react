import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9nmfjvdw.css';
import '../../css/c/cj8t6iwqx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9nmfjvdw wm-k"/><path class="cj8t6iwqx wm-a"/>`,
		"fallback": "withicons-bauhaus:captions",
	});
}

export default Component;
