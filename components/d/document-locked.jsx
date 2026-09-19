import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzkoekz4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzkoekz4d"/>`,
		"fallback": "grommet-icons:document-locked",
	});
}

export default Component;
