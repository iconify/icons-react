import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osn1-qbmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osn1-qbmx"/>`,
		"fallback": "grommet-icons:cloud",
	});
}

export default Component;
