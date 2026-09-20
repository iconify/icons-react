import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpmggy3dl.css';
import '../../css/a/axgi99bgf.css';
import '../../css/b/b_pdi8qgn.css';
import '../../css/k/kjy2ryjzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpmggy3dl"/><path class="axgi99bgf"/><path class="b_pdi8qgn"/><path clip-rule="evenodd" class="kjy2ryjzl"/>`,
		"fallback": "token:ejs",
	});
}

export default Component;
