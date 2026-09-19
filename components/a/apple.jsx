import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwtp_-bzj.css';
import '../../css/h/h3mkp0b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer xwtp_-bzj"/><path class="duoicon-primary-layer h3mkp0b0h"/>`,
		"fallback": "duo-icons:apple",
	});
}

export default Component;
