import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d26h4ib5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d26h4ib5l"/>`,
		"fallback": "noviair:cloud-hail",
	});
}

export default Component;
