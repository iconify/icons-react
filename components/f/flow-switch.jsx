import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pec08zb3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pec08zb3o"/>`,
		"fallback": "typcn:flow-switch",
	});
}

export default Component;
