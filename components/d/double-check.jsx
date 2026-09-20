import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhxk_vbzl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhxk_vbzl"/>`,
		"fallback": "ix:double-check",
	});
}

export default Component;
