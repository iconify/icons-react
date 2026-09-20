import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/d/dh-0z0bmh.css';
import '../../css/h/hhy27hzak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="dh-0z0bmh"/><path class="hhy27hzak"/></g>`,
		"fallback": "lets-icons:folder-check",
	});
}

export default Component;
