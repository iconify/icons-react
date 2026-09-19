import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn9-9y8lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn9-9y8lu"/>`,
		"fallback": "boxicons:asterisk",
	});
}

export default Component;
