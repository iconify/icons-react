import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zr6vqbl-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zr6vqbl-u"/>`,
		"fallback": "simple-icons:appveyor",
	});
}

export default Component;
