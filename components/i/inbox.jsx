import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze2224btx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze2224btx"/>`,
		"fallback": "grommet-icons:inbox",
	});
}

export default Component;
