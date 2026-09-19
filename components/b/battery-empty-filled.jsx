import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ssrlkj0dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ssrlkj0dm"/>`,
		"fallback": "bitcoin-icons:battery-empty-filled",
	});
}

export default Component;
