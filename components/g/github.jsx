import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un7e-x04j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un7e-x04j"/>`,
		"fallback": "feather:github",
	});
}

export default Component;
