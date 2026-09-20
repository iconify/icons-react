import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ltzgmpb7l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ltzgmpb7l"/>`,
		"fallback": "ix:align-objects-left",
	});
}

export default Component;
