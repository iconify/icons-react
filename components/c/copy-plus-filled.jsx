import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgq_0cbvv.css';
import '../../css/y/yuforsmvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgq_0cbvv"/><path class="yuforsmvs"/>`,
		"fallback": "boxicons:copy-plus-filled",
	});
}

export default Component;
