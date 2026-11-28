import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzec2b5dy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qzec2b5dy"/>`,
		"fallback": "noviair:clipboard-check",
	});
}

export default Component;
