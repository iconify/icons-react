import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzl2byfkq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzl2byfkq"/>`,
		"fallback": "fluent-mdl2:double-chevron-left-8",
	});
}

export default Component;
