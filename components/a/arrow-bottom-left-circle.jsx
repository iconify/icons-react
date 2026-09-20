import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-t15ibmv.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-t15ibmv"/>`,
		"fallback": "memory:arrow-bottom-left-circle",
	});
}

export default Component;
