import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrpt4zbzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrpt4zbzr"/>`,
		"fallback": "selfhst:hewlett-packard-enterprise-light",
	});
}

export default Component;
