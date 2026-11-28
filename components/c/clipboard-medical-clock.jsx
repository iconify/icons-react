import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kocx10j0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kocx10j0q"/>`,
		"fallback": "noviair:clipboard-medical-clock",
	});
}

export default Component;
