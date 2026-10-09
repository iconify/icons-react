import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeuw46sqy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeuw46sqy"/>`,
		"fallback": "energy-icons:component-20",
	});
}

export default Component;
