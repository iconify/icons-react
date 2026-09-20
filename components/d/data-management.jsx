import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiq3suo0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iiq3suo0o"/>`,
		"fallback": "ix:data-management",
	});
}

export default Component;
