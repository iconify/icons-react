import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szni6i3td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szni6i3td"/>`,
		"fallback": "gg:dialpad",
	});
}

export default Component;
