import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/haxww0b3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="haxww0b3f"/>`,
		"fallback": "mingcute:git-lab-line",
	});
}

export default Component;
