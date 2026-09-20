import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddv-sj__j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddv-sj__j"/>`,
		"fallback": "ix:counter",
	});
}

export default Component;
