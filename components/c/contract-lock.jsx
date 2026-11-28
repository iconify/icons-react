import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn30cpbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn30cpbbn"/>`,
		"fallback": "noviair:contract-lock",
	});
}

export default Component;
