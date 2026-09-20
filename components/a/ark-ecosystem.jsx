import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd720b16h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd720b16h"/>`,
		"fallback": "thesvg:ark-ecosystem",
	});
}

export default Component;
