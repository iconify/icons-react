import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbtdtbc5w.css';
import '../../css/i/ifoopobcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vbtdtbc5w"/><path class="ifoopobcj"/>`,
		"fallback": "boxicons:arrow-out-up-left-circle",
	});
}

export default Component;
