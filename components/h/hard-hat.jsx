import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxk1z3lyq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxk1z3lyq"/>`,
		"fallback": "bxs:hard-hat",
	});
}

export default Component;
