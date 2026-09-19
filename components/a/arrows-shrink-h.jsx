import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szrkq1uqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szrkq1uqq"/>`,
		"fallback": "gg:arrows-shrink-h",
	});
}

export default Component;
