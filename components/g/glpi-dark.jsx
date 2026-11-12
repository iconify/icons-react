import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi-oj1bdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi-oj1bdw"/>`,
		"fallback": "selfhst:glpi-dark",
	});
}

export default Component;
