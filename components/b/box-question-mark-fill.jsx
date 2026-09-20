import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a22dcsy8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a22dcsy8m"/>`,
		"fallback": "mage:box-question-mark-fill",
	});
}

export default Component;
