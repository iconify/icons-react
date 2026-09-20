import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xosd-cfuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xosd-cfuo"/>`,
		"fallback": "lets-icons:expand-right-stop-light",
	});
}

export default Component;
