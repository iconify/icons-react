import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es8xjub8f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es8xjub8f"/>`,
		"fallback": "pinhead:calm-face-in-circle",
	});
}

export default Component;
