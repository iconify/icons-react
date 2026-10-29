import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zn-9lpbfa.css';
import '../../css/x/xtlfw0b-a.css';
import '../../css/b/b-sovabka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zn-9lpbfa"/><path class="wm-k xtlfw0b-a"/><path class="b-sovabka wm-a"/></g>`,
		"fallback": "withicons:cloud-alert-sketch",
	});
}

export default Component;
