import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uf2bjwbxl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uf2bjwbxl"/>`,
		"fallback": "la:hand-middle-finger-solid",
	});
}

export default Component;
