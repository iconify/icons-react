import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkrwosbpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkrwosbpl"/>`,
		"fallback": "streamline-ultimate-color:arrow-button-up",
	});
}

export default Component;
