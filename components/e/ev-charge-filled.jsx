import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjhclzbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yjhclzbln"/>`,
		"fallback": "reicon:ev-charge-filled",
	});
}

export default Component;
