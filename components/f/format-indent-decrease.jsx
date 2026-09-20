import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msz6qd2fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msz6qd2fm"/>`,
		"fallback": "mdi-light:format-indent-decrease",
	});
}

export default Component;
