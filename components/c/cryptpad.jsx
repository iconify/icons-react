import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwls6usiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwls6usiq"/>`,
		"fallback": "thesvg-color:cryptpad",
	});
}

export default Component;
