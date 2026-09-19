import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx4l9z1qt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx4l9z1qt"/>`,
		"fallback": "fe:hash",
	});
}

export default Component;
