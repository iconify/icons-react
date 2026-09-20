import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufcva7b6g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufcva7b6g"/>`,
		"fallback": "osmic:computer-14",
	});
}

export default Component;
