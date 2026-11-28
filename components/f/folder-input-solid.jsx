import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca_bn4ekm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca_bn4ekm"/>`,
		"fallback": "iconaut:folder-input-solid",
	});
}

export default Component;
