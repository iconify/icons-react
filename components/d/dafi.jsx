import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz66p41ba.css';
import '../../css/x/xdb4trbrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hz66p41ba"/><path class="xdb4trbrm"/>`,
		"fallback": "token:dafi",
	});
}

export default Component;
