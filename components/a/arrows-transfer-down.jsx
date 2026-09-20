import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/va7509xco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="va7509xco"/>`,
		"fallback": "tabler:arrows-transfer-down",
	});
}

export default Component;
