import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0acr7bah.css';
import '../../css/t/tbb80abuh.css';
import '../../css/m/mxcdsenuw.css';
import '../../css/v/vvdxlzbsp.css';
import '../../css/x/xdtq7lbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e0acr7bah"/><path class="tbb80abuh"/><path class="mxcdsenuw"/><path class="vvdxlzbsp"/><path class="xdtq7lbuk"/></g>`,
		"fallback": "streamline-ultimate-color:file-apk",
	});
}

export default Component;
