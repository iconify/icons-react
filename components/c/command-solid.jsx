import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqe3_vbsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqe3_vbsv"/>`,
		"fallback": "iconaut:command-solid",
	});
}

export default Component;
