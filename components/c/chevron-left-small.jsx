import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7n23_boa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7n23_boa"/>`,
		"fallback": "ix:chevron-left-small",
	});
}

export default Component;
