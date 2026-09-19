import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujbvu5b5g.css';
import '../../css/o/omc5y5yrn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujbvu5b5g"/><path class="omc5y5yrn"/>`,
		"fallback": "cryptocurrency:ethos",
	});
}

export default Component;
