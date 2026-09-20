import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grn2m8dbp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grn2m8dbp"/>`,
		"fallback": "streamline-flex:archive-box",
	});
}

export default Component;
