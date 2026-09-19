import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi2mgubtd.css';
import '../../css/f/fgk1ekbcn.css';
import '../../css/j/j0k3qqbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi2mgubtd"/><path class="fgk1ekbcn"/><path class="j0k3qqbww"/>`,
		"fallback": "bx:id-card",
	});
}

export default Component;
