import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agc6-r88p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agc6-r88p"/>`,
		"fallback": "grommet-icons:dropbox",
	});
}

export default Component;
