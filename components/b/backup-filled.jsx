import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcu5g6baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcu5g6baw"/>`,
		"fallback": "tdesign:backup-filled",
	});
}

export default Component;
