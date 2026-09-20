import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inh5m1-1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inh5m1-1e"/>`,
		"fallback": "thesvg-color:fifa",
	});
}

export default Component;
