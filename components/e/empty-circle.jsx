import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enhmg-iip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enhmg-iip"/>`,
		"fallback": "grommet-icons:empty-circle",
	});
}

export default Component;
