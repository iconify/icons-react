import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwp7mzb0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwp7mzb0a"/>`,
		"fallback": "noviair:help-circle",
	});
}

export default Component;
