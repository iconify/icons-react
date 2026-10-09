import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xolj2c6gb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xolj2c6gb"/>`,
		"fallback": "energy-icons:flood-20",
	});
}

export default Component;
