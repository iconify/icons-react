import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvng27k2m.css';
import '../../css/u/utmbef4et.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="cvng27k2m"/><rect class="utmbef4et"/>`,
		"fallback": "garden:answer-bot-26",
	});
}

export default Component;
