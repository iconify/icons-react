import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwbdq-bvs.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwbdq-bvs"/>`,
		"fallback": "memory:compass-north-arrow",
	});
}

export default Component;
