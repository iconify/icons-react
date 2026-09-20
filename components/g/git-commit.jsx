import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isu_57j9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isu_57j9m"/>`,
		"fallback": "mynaui:git-commit",
	});
}

export default Component;
