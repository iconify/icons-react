import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucprq1frk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucprq1frk"/>`,
		"fallback": "nrk:backward-end",
	});
}

export default Component;
