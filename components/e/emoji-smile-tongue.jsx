import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xineib3hr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xineib3hr"/>`,
		"fallback": "lineicons:emoji-smile-tongue",
	});
}

export default Component;
