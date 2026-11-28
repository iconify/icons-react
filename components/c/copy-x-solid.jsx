import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xuu_75j-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xuu_75j-s"/>`,
		"fallback": "iconaut:copy-x-solid",
	});
}

export default Component;
