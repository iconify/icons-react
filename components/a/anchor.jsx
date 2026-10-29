import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnide0b8v.css';
import '../../css/d/dgnctcbtx.css';
import '../../css/x/xc0dnkbmf.css';
import '../../css/f/fmtd-vbvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnide0b8v wm-a"/><path class="dgnctcbtx wm-k"/><path class="wm-k xc0dnkbmf"/><path class="fmtd-vbvf wm-k"/>`,
		"fallback": "withicons-bauhaus:anchor",
	});
}

export default Component;
