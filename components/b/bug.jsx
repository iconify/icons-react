import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e618xc-zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="e618xc-zr"/>`,
		"fallback": "wordpress:bug",
	});
}

export default Component;
