import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvdrhhj_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvdrhhj_w"/>`,
		"fallback": "vadivam:circle-off",
	});
}

export default Component;
