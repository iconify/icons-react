import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek4_hnsal.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ek4_hnsal"/>`,
		"fallback": "ant-design:dropbox-square-filled",
	});
}

export default Component;
