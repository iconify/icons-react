import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/siiq3ubdv.css';
import '../../css/m/myyvdnbaf.css';
import '../../css/z/zsubpclpp.css';
import '../../css/a/ag46ix2kh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="siiq3ubdv"/><path class="myyvdnbaf wm-a"/><path class="wm-k zsubpclpp"/><path class="ag46ix2kh wm-a"/></g>`,
		"fallback": "withicons:file-code-sketch",
	});
}

export default Component;
