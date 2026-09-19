import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xey0jwb5k.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xey0jwb5k"/>`,
		"fallback": "devicon-plain:angular-wordmark",
	});
}

export default Component;
