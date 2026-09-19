import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqo2otbfl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqo2otbfl"/>`,
		"fallback": "boxicons:ear-slash-filled",
	});
}

export default Component;
