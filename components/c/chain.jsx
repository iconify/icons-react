import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rcnka6jzk.css';
import '../../css/m/md286fbip.css';
import '../../css/u/uqfwj2bsy.css';
import '../../css/k/kycke37ds.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="rcnka6jzk"/><g class="md286fbip"><path class="uqfwj2bsy"/><path class="kycke37ds"/></g></g>`,
		"fallback": "cryptocurrency-color:chain",
	});
}

export default Component;
