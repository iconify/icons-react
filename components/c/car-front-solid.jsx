import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc2tlw_6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc2tlw_6f"/>`,
		"fallback": "iconaut:car-front-solid",
	});
}

export default Component;
