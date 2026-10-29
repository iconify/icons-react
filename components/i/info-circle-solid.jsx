import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l25a_acmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l25a_acmi"/>`,
		"fallback": "withicons:info-circle-solid",
	});
}

export default Component;
