import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idsrdcruo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idsrdcruo"/>`,
		"fallback": "reicon:arrow-right2-filled",
	});
}

export default Component;
