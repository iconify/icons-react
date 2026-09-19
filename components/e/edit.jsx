import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5_zthcmd.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5_zthcmd"/>`,
		"fallback": "fa-regular:edit",
	});
}

export default Component;
