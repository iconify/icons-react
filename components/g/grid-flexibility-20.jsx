import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjz8wn-my.css';
import '../../css/u/ukun5-bzx.css';
import '../../css/p/p5wu9x5yk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjz8wn-my"/><path class="ukun5-bzx"/><path class="p5wu9x5yk"/>`,
		"fallback": "energy-icons:grid-flexibility-20",
	});
}

export default Component;
