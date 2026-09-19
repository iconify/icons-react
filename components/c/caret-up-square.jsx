import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vb-ee9b3j.css';
import '../../css/i/ijg5zh-jo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vb-ee9b3j"/><path class="ijg5zh-jo"/>`,
		"fallback": "boxicons:caret-up-square",
	});
}

export default Component;
