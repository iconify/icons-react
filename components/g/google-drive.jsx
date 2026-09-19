import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abtk0lbbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="abtk0lbbo"/>`,
		"fallback": "iconoir:google-drive",
	});
}

export default Component;
