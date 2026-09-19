import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf9dwxbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf9dwxbha"/>`,
		"fallback": "humbleicons:beer",
	});
}

export default Component;
