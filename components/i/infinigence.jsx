import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qia4tpe1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qia4tpe1y"/>`,
		"fallback": "thesvg:infinigence",
	});
}

export default Component;
