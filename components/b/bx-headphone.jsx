import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqg3ftxno.css';
import '../../css/v/v6ayyo12g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqg3ftxno"/><path class="v6ayyo12g"/>`,
		"fallback": "bx:bx-headphone",
	});
}

export default Component;
