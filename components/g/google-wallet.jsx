import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju3o7zbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju3o7zbjj"/>`,
		"fallback": "grommet-icons:google-wallet",
	});
}

export default Component;
