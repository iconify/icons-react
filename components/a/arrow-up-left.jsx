import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlw8gbbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlw8gbbfc"/>`,
		"fallback": "noviair:arrow-up-left",
	});
}

export default Component;
