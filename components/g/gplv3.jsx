import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqqj_ob1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqqj_ob1e"/>`,
		"fallback": "thesvg:gplv3",
	});
}

export default Component;
