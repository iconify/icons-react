import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz27hpnpu.css';

const viewBox = {"width":96,"height":96};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz27hpnpu"/>`,
		"fallback": "thesvg-color:freescout-light",
	});
}

export default Component;
