import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gft-esr-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gft-esr-q"/>`,
		"fallback": "reicon:grid8",
	});
}

export default Component;
