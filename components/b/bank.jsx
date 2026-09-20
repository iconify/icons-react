import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiqt2mbet.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiqt2mbet"/>`,
		"fallback": "picon:bank",
	});
}

export default Component;
