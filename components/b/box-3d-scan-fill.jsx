import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kj3_hyblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kj3_hyblf"/>`,
		"fallback": "mage:box-3d-scan-fill",
	});
}

export default Component;
