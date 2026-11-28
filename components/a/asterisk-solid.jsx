import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xndih1bcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xndih1bcb"/>`,
		"fallback": "iconaut:asterisk-solid",
	});
}

export default Component;
