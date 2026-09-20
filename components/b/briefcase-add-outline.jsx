import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efo8qcbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efo8qcbxs"/>`,
		"fallback": "mdi:briefcase-add-outline",
	});
}

export default Component;
