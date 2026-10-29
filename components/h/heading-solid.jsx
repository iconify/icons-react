import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljipl3smr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljipl3smr"/>`,
		"fallback": "withicons:heading-solid",
	});
}

export default Component;
