import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oct_aobqd.css';
import '../../css/i/i-8vw9hdb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oct_aobqd"/><path class="i-8vw9hdb"/>`,
		"fallback": "selfhst:atlas-network-light",
	});
}

export default Component;
