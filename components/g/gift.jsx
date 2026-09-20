import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o2azvnbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="o2azvnbrc"/>`,
		"fallback": "wordpress:gift",
	});
}

export default Component;
