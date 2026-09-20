import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjnsghb1l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjnsghb1l"/>`,
		"fallback": "pinhead:gas-flame-above-outstretched-hand",
	});
}

export default Component;
