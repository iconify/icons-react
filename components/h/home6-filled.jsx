import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mre_tg15u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mre_tg15u"/>`,
		"fallback": "reicon:home6-filled",
	});
}

export default Component;
