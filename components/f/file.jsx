import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrt3w773d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="zrt3w773d"/>`,
		"fallback": "wordpress:file",
	});
}

export default Component;
