import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzzh1ommd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary qzzh1ommd"/>`,
		"fallback": "iconaut:ai-detect-duotone",
	});
}

export default Component;
