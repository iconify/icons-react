import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvvm0fb4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvvm0fb4b"/>`,
		"fallback": "selfhst:hubzilla-dark",
	});
}

export default Component;
