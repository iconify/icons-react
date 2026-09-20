import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb3yl8b8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="zb3yl8b8w"/>`,
		"fallback": "wordpress:cloud-download",
	});
}

export default Component;
