import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs48jm-6p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs48jm-6p"/>`,
		"fallback": "f7:hand-point-right",
	});
}

export default Component;
