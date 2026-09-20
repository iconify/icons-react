import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpralsssx.css';
import '../../css/g/gaw19yb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpralsssx"/><path class="gaw19yb6i"/>`,
		"fallback": "pixel:camera",
	});
}

export default Component;
