import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws22k8poc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws22k8poc"/>`,
		"fallback": "whh:grails",
	});
}

export default Component;
