import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nup9ubvly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nup9ubvly"/>`,
		"fallback": "thesvg-color:apache-netbeans-ide",
	});
}

export default Component;
