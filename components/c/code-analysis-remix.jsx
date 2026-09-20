import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yflzqq_6m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yflzqq_6m"/>`,
		"fallback": "streamline-flex:code-analysis-remix",
	});
}

export default Component;
