import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjt2vnb6p.css';
import '../../css/a/axzye1lxy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjt2vnb6p"/><path class="axzye1lxy"/>`,
		"fallback": "energy-icons:copy-20",
	});
}

export default Component;
