import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt-xd3bpd.css';
import '../../css/y/ynyfbdo0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt-xd3bpd"/><path class="ynyfbdo0o"/>`,
		"fallback": "token:eml",
	});
}

export default Component;
