import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orlk51biu.css';
import '../../css/t/tjdhhwbtf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orlk51biu"/><path class="tjdhhwbtf"/>`,
		"fallback": "energy-icons:black-start-20",
	});
}

export default Component;
