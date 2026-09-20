import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhiafj-by.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhiafj-by"/>`,
		"fallback": "selfhst:hashicorp-boundary",
	});
}

export default Component;
