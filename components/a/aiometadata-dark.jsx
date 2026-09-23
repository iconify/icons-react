import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_tz7sbvk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_tz7sbvk"/>`,
		"fallback": "selfhst:aiometadata-dark",
	});
}

export default Component;
