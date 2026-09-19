import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvrw6qbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvrw6qbih"/>`,
		"fallback": "grommet-icons:basket",
	});
}

export default Component;
