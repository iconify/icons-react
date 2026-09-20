import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdyia779g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdyia779g"/>`,
		"fallback": "selfhst:dovecot",
	});
}

export default Component;
