import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpl-7jcme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zpl-7jcme"/>`,
		"fallback": "ix:clear-filter",
	});
}

export default Component;
