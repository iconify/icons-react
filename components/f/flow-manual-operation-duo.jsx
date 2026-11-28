import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cna5h-bpn.css';
import '../../css/k/k5oixywsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cna5h-bpn secondary"/><path class="k5oixywsl primary"/>`,
		"fallback": "iconaut:flow-manual-operation-duo",
	});
}

export default Component;
