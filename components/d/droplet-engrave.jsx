import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zga537btf.css';
import '../../css/t/tue7ke1ug.css';
import '../../css/b/b8357wzya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="zga537btf"/><path class="tue7ke1ug wm-shadow"/><path class="b8357wzya"/></g>`,
		"fallback": "withicons:droplet-engrave",
	});
}

export default Component;
