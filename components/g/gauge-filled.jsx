import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4ov4gbsd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4ov4gbsd"/>`,
		"fallback": "ix:gauge-filled",
	});
}

export default Component;
