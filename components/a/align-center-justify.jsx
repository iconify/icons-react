import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qipzo4amq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qipzo4amq"/>`,
		"fallback": "uil:align-center-justify",
	});
}

export default Component;
