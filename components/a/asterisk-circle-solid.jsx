import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcx275bhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcx275bhn"/>`,
		"fallback": "mynaui:asterisk-circle-solid",
	});
}

export default Component;
