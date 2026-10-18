import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybu_i-bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybu_i-bqc"/>`,
		"fallback": "vadivam:bot-message-square",
	});
}

export default Component;
