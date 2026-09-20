import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds08pm90k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds08pm90k"/>`,
		"fallback": "thesvg-color:baseten",
	});
}

export default Component;
