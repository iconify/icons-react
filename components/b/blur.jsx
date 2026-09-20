import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgvu0gb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgvu0gb5o"/>`,
		"fallback": "tabler:blur",
	});
}

export default Component;
