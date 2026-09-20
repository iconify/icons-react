import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzr4-wmbo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzr4-wmbo"/>`,
		"fallback": "selfhst:iheartradio-light",
	});
}

export default Component;
