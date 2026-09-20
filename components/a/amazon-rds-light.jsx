import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7ql9-bef.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7ql9-bef"/>`,
		"fallback": "selfhst:amazon-rds-light",
	});
}

export default Component;
