import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss7a92bzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss7a92bzj"/>`,
		"fallback": "stash:arrow-down-light",
	});
}

export default Component;
