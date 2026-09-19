import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmg9y89jt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmg9y89jt"/>`,
		"fallback": "griddy-icons:file-scan-filled",
	});
}

export default Component;
