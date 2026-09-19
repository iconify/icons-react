import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baxcrzb3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baxcrzb3f"/>`,
		"fallback": "griddy-icons:ai-assistant-filled",
	});
}

export default Component;
