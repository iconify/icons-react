import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzlcb_btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzlcb_btt"/>`,
		"fallback": "uil:crockery",
	});
}

export default Component;
