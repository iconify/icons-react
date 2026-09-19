import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igvua1b9y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igvua1b9y"/>`,
		"fallback": "devicon-plain:delphi",
	});
}

export default Component;
