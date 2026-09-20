import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv15p9qut.css';
import '../../css/t/tytb7gbzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv15p9qut"/><path class="tytb7gbzn"/>`,
		"fallback": "mingcute:inspect-fill",
	});
}

export default Component;
