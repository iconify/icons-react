import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx3sd2bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx3sd2bgm"/>`,
		"fallback": "mynaui:folder-check-solid",
	});
}

export default Component;
