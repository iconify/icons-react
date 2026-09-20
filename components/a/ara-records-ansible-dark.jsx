import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbsrd8h1p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbsrd8h1p"/>`,
		"fallback": "selfhst:ara-records-ansible-dark",
	});
}

export default Component;
