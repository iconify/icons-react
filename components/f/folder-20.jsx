import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk8kloxbh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk8kloxbh"/>`,
		"fallback": "energy-icons:folder-20",
	});
}

export default Component;
