import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2cojm2_l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v2cojm2_l"/>`,
		"fallback": "streamline:cloud-refresh-remix",
	});
}

export default Component;
