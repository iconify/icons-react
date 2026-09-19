import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbtdtbc5w.css';
import '../../css/f/fuq627b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbtdtbc5w"/><path class="fuq627b0r"/>`,
		"fallback": "boxicons:arrow-out-up-left-circle-filled",
	});
}

export default Component;
