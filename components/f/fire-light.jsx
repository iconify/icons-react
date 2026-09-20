import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcmlopf1w.css';
import '../../css/n/nhd6537wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcmlopf1w"/><path class="nhd6537wc"/>`,
		"fallback": "lets-icons:fire-light",
	});
}

export default Component;
