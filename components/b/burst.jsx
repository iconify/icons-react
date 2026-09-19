import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywep2fv3q.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywep2fv3q"/>`,
		"fallback": "f7:burst",
	});
}

export default Component;
