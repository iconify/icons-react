import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt0y82beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt0y82beq"/>`,
		"fallback": "vadivam:align-horizontal-justify-end",
	});
}

export default Component;
