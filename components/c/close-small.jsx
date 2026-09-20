import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc5_a1ncx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="oc5_a1ncx"/>`,
		"fallback": "wordpress:close-small",
	});
}

export default Component;
