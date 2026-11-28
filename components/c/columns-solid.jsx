import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itsor3ber.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itsor3ber"/>`,
		"fallback": "iconaut:columns-solid",
	});
}

export default Component;
