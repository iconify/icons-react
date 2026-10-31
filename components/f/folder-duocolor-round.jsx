import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3i9qpgha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3i9qpgha"/>`,
		"fallback": "coolicons:folder-duocolor-round",
	});
}

export default Component;
