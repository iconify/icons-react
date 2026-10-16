import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyvh6kk2s.css';
import '../../css/j/jk43hwbxb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyvh6kk2s"/><path class="jk43hwbxb"/>`,
		"fallback": "energy-icons:flowchart-20-bold",
	});
}

export default Component;
