import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dak2kq27q.css';
import '../../css/e/e6x_lacct.css';
import '../../css/v/v9b-7-bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dak2kq27q"/><path class="e6x_lacct"/><path class="v9b-7-bzp"/></g>`,
		"fallback": "streamline-logos:adobe-animate-logo",
	});
}

export default Component;
