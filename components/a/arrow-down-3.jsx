import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu-_0514m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu-_0514m"/>`,
		"fallback": "reicon:arrow-down-3",
	});
}

export default Component;
