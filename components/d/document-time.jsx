import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqi66yb-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqi66yb-y"/>`,
		"fallback": "grommet-icons:document-time",
	});
}

export default Component;
