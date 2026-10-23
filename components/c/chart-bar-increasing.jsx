import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg24ipbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg24ipbcj"/>`,
		"fallback": "vadivam:chart-bar-increasing",
	});
}

export default Component;
