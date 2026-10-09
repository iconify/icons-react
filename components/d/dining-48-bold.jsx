import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmbj85spj.css';
import '../../css/o/orpaa3b5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmbj85spj"/><path class="orpaa3b5x"/>`,
		"fallback": "energy-icons:dining-48-bold",
	});
}

export default Component;
