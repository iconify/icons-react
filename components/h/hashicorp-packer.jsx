import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvt9z9bol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvt9z9bol"/>`,
		"fallback": "selfhst:hashicorp-packer",
	});
}

export default Component;
