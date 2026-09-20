import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb2n9ybdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gb2n9ybdx"/>`,
		"fallback": "ix:connection-signal",
	});
}

export default Component;
