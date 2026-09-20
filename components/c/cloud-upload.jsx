import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6a28fbux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="a6a28fbux"/>`,
		"fallback": "wordpress:cloud-upload",
	});
}

export default Component;
