import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka3qc9bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka3qc9bms"/>`,
		"fallback": "mdi-light:cloud-upload",
	});
}

export default Component;
