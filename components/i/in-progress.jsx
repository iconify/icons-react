import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qglvkk1rk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qglvkk1rk"/>`,
		"fallback": "grommet-icons:in-progress",
	});
}

export default Component;
