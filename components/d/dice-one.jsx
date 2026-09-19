import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc489ewpx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc489ewpx"/>`,
		"fallback": "fa7-solid:dice-one",
	});
}

export default Component;
