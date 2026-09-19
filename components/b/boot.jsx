import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2c_gdcrq.css';
import '../../css/h/hcr-277-p.css';
import '../../css/q/qen33gjlg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2c_gdcrq"/><path class="hcr-277-p"/><path class="qen33gjlg"/>`,
		"fallback": "fxemoji:boot",
	});
}

export default Component;
