import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijz0xvbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijz0xvbzy"/>`,
		"fallback": "reicon:headphones3-filled",
	});
}

export default Component;
