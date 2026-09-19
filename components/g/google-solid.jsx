import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na3cc9g2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na3cc9g2l"/>`,
		"fallback": "basil:google-solid",
	});
}

export default Component;
