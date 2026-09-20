import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqqc-fdfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqqc-fdfx"/>`,
		"fallback": "reicon:grid4-filled",
	});
}

export default Component;
