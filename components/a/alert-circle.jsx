import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7e247bcz.css';
import '../../css/w/wtmn1wb4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7e247bcz"/><path class="wtmn1wb4m"/>`,
		"fallback": "boxicons:alert-circle",
	});
}

export default Component;
