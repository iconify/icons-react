import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qok_cu2qi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qok_cu2qi"/>`,
		"fallback": "vadivam:arrow-right",
	});
}

export default Component;
