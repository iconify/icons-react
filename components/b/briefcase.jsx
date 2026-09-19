import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rin3p3brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rin3p3brc"/>`,
		"fallback": "bx:briefcase",
	});
}

export default Component;
