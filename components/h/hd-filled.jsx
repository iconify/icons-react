import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8bo3ne0r.css';
import '../../css/a/a_gu8acsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8bo3ne0r"/><path class="a_gu8acsg"/>`,
		"fallback": "tdesign:hd-filled",
	});
}

export default Component;
