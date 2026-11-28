import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb7ka-zms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb7ka-zms"/>`,
		"fallback": "noviair-light:ambulance",
	});
}

export default Component;
