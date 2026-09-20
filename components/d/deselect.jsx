import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsak1b5cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsak1b5cw"/>`,
		"fallback": "tabler:deselect",
	});
}

export default Component;
