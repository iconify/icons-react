import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imklbhx5a.css';
import '../../css/g/g2u40lrig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imklbhx5a"/><path class="g2u40lrig"/>`,
		"fallback": "streamline-freehand:currency-euro-bubble",
	});
}

export default Component;
