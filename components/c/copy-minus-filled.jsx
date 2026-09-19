import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lp69nyjcq.css';
import '../../css/y/yuforsmvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lp69nyjcq"/><path class="yuforsmvs"/>`,
		"fallback": "boxicons:copy-minus-filled",
	});
}

export default Component;
