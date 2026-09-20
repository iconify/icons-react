import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpsob4btj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpsob4btj"/>`,
		"fallback": "mingcute:arrow-right-down-fill",
	});
}

export default Component;
