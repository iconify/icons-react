import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo95jm1am.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo95jm1am"/>`,
		"fallback": "ix:circle-pause",
	});
}

export default Component;
