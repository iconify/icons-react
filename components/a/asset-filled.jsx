import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7pi4cqiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7pi4cqiq"/>`,
		"fallback": "tabler:asset-filled",
	});
}

export default Component;
