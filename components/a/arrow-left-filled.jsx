import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mm2p3jkwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mm2p3jkwt"/>`,
		"fallback": "reicon:arrow-left-filled",
	});
}

export default Component;
