import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgejw_z5b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgejw_z5b"/>`,
		"fallback": "fa7-solid:hand-middle-finger",
	});
}

export default Component;
