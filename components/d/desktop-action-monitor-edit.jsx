import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g74vzqvdz.css';
import '../../css/v/vselo_bxr.css';
import '../../css/a/ang81xbkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g74vzqvdz"/><path class="vselo_bxr"/><path class="ang81xbkn"/></g>`,
		"fallback": "streamline-freehand-color:desktop-action-monitor-edit",
	});
}

export default Component;
