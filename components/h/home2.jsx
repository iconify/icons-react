import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmbyvo7cg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmbyvo7cg"/>`,
		"fallback": "reicon:home2",
	});
}

export default Component;
