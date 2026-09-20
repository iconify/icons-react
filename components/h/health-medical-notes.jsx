import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gaop-ogzu.css';
import '../../css/w/w8tcc-b1k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gaop-ogzu"/><path class="w8tcc-b1k"/>`,
		"fallback": "streamline-pixel:health-medical-notes",
	});
}

export default Component;
