import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyiib6bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eyiib6bgx"/>`,
		"fallback": "lets-icons:file-dock-fill",
	});
}

export default Component;
