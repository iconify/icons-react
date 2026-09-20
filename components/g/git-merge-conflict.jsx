import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgtnmhitr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgtnmhitr"/>`,
		"fallback": "keyline-icons:git-merge-conflict",
	});
}

export default Component;
