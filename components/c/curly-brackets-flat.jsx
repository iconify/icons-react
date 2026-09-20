import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m88e10b7x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m88e10b7x"/>`,
		"fallback": "streamline-color:curly-brackets-flat",
	});
}

export default Component;
