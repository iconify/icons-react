import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o39h_qb3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o39h_qb3a"/>`,
		"fallback": "mdi:alphabet-e-box",
	});
}

export default Component;
