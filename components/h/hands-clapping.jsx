import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjskp-bgj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjskp-bgj"/>`,
		"fallback": "fa7-solid:hands-clapping",
	});
}

export default Component;
