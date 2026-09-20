import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdcmtdids.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdcmtdids"/>`,
		"fallback": "reicon:box5-filled",
	});
}

export default Component;
