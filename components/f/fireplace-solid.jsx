import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gana1fb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gana1fb1s"/>`,
		"fallback": "iconaut:fireplace-solid",
	});
}

export default Component;
