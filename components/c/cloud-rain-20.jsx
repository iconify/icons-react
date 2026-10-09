import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig5xbqbxf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ig5xbqbxf"/>`,
		"fallback": "energy-icons:cloud-rain-20",
	});
}

export default Component;
