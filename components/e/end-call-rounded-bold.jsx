import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnokzacxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnokzacxm"/>`,
		"fallback": "solar:end-call-rounded-bold",
	});
}

export default Component;
