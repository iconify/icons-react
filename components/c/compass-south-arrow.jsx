import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjptze3sn.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjptze3sn"/>`,
		"fallback": "memory:compass-south-arrow",
	});
}

export default Component;
