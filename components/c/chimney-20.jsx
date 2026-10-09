import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhjg018pp.css';
import '../../css/a/a0pyaabma.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhjg018pp"/><path class="a0pyaabma"/>`,
		"fallback": "energy-icons:chimney-20",
	});
}

export default Component;
