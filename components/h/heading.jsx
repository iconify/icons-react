import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9s00j82r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="t9s00j82r"/>`,
		"fallback": "wordpress:heading",
	});
}

export default Component;
