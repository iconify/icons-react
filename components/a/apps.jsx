import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt5kidcuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qt5kidcuc"/>`,
		"fallback": "griddy-icons:apps",
	});
}

export default Component;
