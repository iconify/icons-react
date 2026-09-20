import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_sowbzl.css';
import '../../css/x/xxr0bwmsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh_sowbzl"/><path class="xxr0bwmsb"/>`,
		"fallback": "mingcute:candy-line",
	});
}

export default Component;
