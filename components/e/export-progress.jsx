import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgm1g8b1x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mgm1g8b1x"/>`,
		"fallback": "ix:export-progress",
	});
}

export default Component;
