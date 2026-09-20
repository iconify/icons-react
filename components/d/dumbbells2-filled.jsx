import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xizp-3d-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xizp-3d-x"/>`,
		"fallback": "reicon:dumbbells2-filled",
	});
}

export default Component;
