import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jteh5fb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jteh5fb4d"/>`,
		"fallback": "withicons:archive-restore-solid",
	});
}

export default Component;
