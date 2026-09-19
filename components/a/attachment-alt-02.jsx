import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlqrl5bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlqrl5bli"/>`,
		"fallback": "griddy-icons:attachment-alt-02",
	});
}

export default Component;
