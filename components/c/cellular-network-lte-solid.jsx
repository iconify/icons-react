import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqsm_1b-j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aqsm_1b-j"/>`,
		"fallback": "streamline:cellular-network-lte-solid",
	});
}

export default Component;
