import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjx9skd3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjx9skd3v"/>`,
		"fallback": "simple-icons:hypit",
	});
}

export default Component;
