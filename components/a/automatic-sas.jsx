import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3q2jqs8r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3q2jqs8r"/>`,
		"fallback": "game-icons:automatic-sas",
	});
}

export default Component;
