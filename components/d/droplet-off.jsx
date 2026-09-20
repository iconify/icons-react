import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqb7r5b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqb7r5b8a"/>`,
		"fallback": "lucide:droplet-off",
	});
}

export default Component;
