import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frdzy3b5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frdzy3b5n"/>`,
		"fallback": "ri:file-marked-fill",
	});
}

export default Component;
