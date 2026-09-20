import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/matl_strt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="matl_strt"/>`,
		"fallback": "streamline:compsition-horizontal-remix",
	});
}

export default Component;
