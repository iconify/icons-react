import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcnx9acjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="xcnx9acjb"/>`,
		"fallback": "wordpress:heading-level-5",
	});
}

export default Component;
