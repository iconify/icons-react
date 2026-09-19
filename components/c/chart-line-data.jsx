import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgyq62bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgyq62bby"/>`,
		"fallback": "griddy-icons:chart-line-data",
	});
}

export default Component;
