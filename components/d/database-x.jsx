import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/req006c1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="req006c1l"/>`,
		"fallback": "noviair:database-x",
	});
}

export default Component;
