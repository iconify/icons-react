import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv1mxrgyg.css';
import '../../css/h/h2tie5wrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv1mxrgyg"/><path class="h2tie5wrc"/>`,
		"fallback": "pixel:chart-line-solid",
	});
}

export default Component;
