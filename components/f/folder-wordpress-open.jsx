import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xolmzhbns.css';
import '../../css/i/ilpzg4xos.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xolmzhbns"/><path class="ilpzg4xos"/>`,
		"fallback": "material-icon-theme:folder-wordpress-open",
	});
}

export default Component;
