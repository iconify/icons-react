import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xits50bku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xits50bku"/>`,
		"fallback": "meteor-icons:cloud-rain",
	});
}

export default Component;
