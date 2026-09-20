import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loj74m4-w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loj74m4-w"/>`,
		"fallback": "selfhst:freedombox-dark",
	});
}

export default Component;
