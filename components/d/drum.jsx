import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjq0_3_pw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjq0_3_pw"/>`,
		"fallback": "game-icons:drum",
	});
}

export default Component;
