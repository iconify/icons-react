import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc49n6q0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc49n6q0x"/>`,
		"fallback": "nrk:bell-solid",
	});
}

export default Component;
