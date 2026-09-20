import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkg5wobjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fkg5wobjb"/>`,
		"fallback": "lucide:chart-column",
	});
}

export default Component;
