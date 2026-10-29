import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/teyry0bvj.css';
import '../../css/h/h8t4uobjx.css';
import '../../css/e/eznhzablb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="teyry0bvj"/><path class="h8t4uobjx wm-shadow"/><path class="eznhzablb"/></g>`,
		"fallback": "withicons:glasses-engrave",
	});
}

export default Component;
